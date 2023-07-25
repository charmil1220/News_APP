import React, {  useEffect ,  useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News=(props)=> {
  const[articles,setArticles]=useState([])
  const[,setLoading]=useState(true)
  const[page,setPage]=useState(1)
  const[totalResults,setTotalResults]=useState(0)
  

 
   
   
  const updateNews=async()=>{
    const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=593dbd11ecf44a2a9683b2b493728fca&page=1&pageSize=${props.pageSize}`;
     
    setLoading(true)
    let data = await fetch(url);
    let parseddata = await data.json()
    console.log(parseddata);
    setArticles(parseddata.articles)
    setTotalResults(parseddata.totalResults)
    setLoading(false)

     

  }

  useEffect(()=>{
    updateNews();
    
  },[])

   

  // handleNextClick= async()=>{
  //   console.log("NExt");
  //   let url=  `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=593dbd11ecf44a2a9683b2b493728fca&page=${this.state.page +1}&pageSize=${props.pageSize}`;
  //   this.setState({
  //     loading:true
  //   });
  //   let data = await fetch(url);
  //   let parseddata = await data.json()
  //   this.setState({
  //     loading:false
  //   });
  //   console.log(parseddata);
  //   this.setState({
  //     page:this.state.page +1,
  //     articles:parseddata.articles,
  //     totalResults: parseddata.totalResults,
      
  //   })

  // }
  // handlePrevClick=async()=>{
  //   console.log("previous");
  //   let url=  `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=593dbd11ecf44a2a9683b2b493728fca&page=${this.state.page -1}&pageSize=${props.pageSize}`;
  //   let data = await fetch(url);
  //   let parseddata = await data.json()
  //   console.log(parseddata);
  //   this.setState({
  //     page:this.state.page -1,
  //     articles:parseddata.articles
      
  //   })
  // }
  const fetchMoreData = async () => {
    
    const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=593dbd11ecf44a2a9683b2b493728fca&page=${page +1}&pageSize=${props.pageSize}`;
    setPage(page +1)
    let data = await fetch(url);
    let parseddata = await data.json()
    console.log(parseddata);
    setArticles(articles.concat(parseddata.articles))
    setTotalResults(parseddata.totalResults)
     
    
     
  };
  
    return (
      <div >
        <h1 className='text-center ' style={{margin:"35px 0px",marginTop:"90px"}}>News Application - Top Headlines</h1>
        {/* { loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={ articles.length}
          next={fetchMoreData}
          hasMore={ articles.length !==  totalResults}
          loader={<Spinner/>}
        > <div className="container my-3">
          <div className="row">
            {articles.map((element)=>{
              return <div className="col-md-4" key = {element.url}>
              <Newsitem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div>
            })}   
          </div>
          </div>
        </InfiniteScroll>
       
      </div>
    )
  }

News.defaultProps = {
  country:'in',
  pageSize: 8,
  category:'general',

}

News.propTypes = {
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}

export default News
