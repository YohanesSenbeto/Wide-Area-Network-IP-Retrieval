import React from 'react'

export default function Tutorials() {
  return (
    <div>
        <div className="video-card">
              <h3>Tutorial Video</h3>
              <iframe
                width="60%"
                height="450"
                src={"https://www.youtube.com/embed/UoGAksPaUcs?si=2RVpsK7D51MdAnUf"}
                title="Router Tutorial Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
      
    </div>
  )
}
