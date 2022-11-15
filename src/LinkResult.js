import React, { useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import {AiOutlineCopy} from 'react-icons/ai'


const LinkResult = ({ inputValue }) => {
    console.log(inputValue)
    const [shortenLink, setShortenLink] = useState("Your Shrinked Link must apear here...");
    const [copied, setCopied] = useState(false);


    useEffect(() => {
        const timer = setTimeout(() => {
          setCopied(false);
        }, 1000);
    
        return () => clearTimeout(timer);
    }, [copied]);

  return (
    <div className='result'>
        <p>
            {shortenLink}
            <CopyToClipboard
                text={shortenLink}
                onCopy={() => setCopied(true)}>
                <button className={copied ? "copied" : ''}><AiOutlineCopy />{copied ? 'Copied!' : 'Copy'}</button>
            </CopyToClipboard>
        </p>
        

        
    </div>
  )
}

export default LinkResult
