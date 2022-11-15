import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import {AiOutlineCopy} from 'react-icons/ai'


const LinkResult = ({ inputValue }) => {

  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  const fetchData = async () => {
    try{
      setLoading(true)
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
      setShortenLink(res.data.result.full_short_link)
    }catch(err){
      setError(err)
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    if(inputValue.length){
      fetchData();
    }
  }, [inputValue])

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
  
    return () => clearTimeout(timer);
  }, [copied]);
  

  if(loading){
    return <p className='noData'>Loading ...</p>
  }if(error){
    return <p className='noData'>Something Went Wrong ...</p>
  }
  
  return (
    <>
      {shortenLink && (
        <div className='result'>
        <p>
          {shortenLink}
          <CopyToClipboard
            text={shortenLink}
            onCopy={() => setCopied(true)}>
            <button className={copied ? "copied" : ''}>
              <AiOutlineCopy style={{marginRight: '4px'}} />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </CopyToClipboard>
        </p>
      </div>
      )}
    </>
  )
}

export default LinkResult
