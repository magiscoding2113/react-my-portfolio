import React from 'react';

 const portfolioDisplay = [
{
     title:"Streaming Services",
     link:"https://magiscoding2113.github.io/streaming-service-tracker/",
     className:"",
     gitHubRepo:"https://github.com/magiscoding2113/streaming-service-tracker",
    },
// //    {
// //      title:"",
// //      link:"",
// //      className:"",
// //      gitHubRepo:"",
// //    },
// //    {
// //     title:"",
// //     link:"",
// //     className:"",
// //     gitHubRepo:"",
// //   },
   
  ];

const openSite = (link) => {
window.open(link);
}
;

export default function Portfolio() {
    return (
        <div className='body'>
            <h1>Portfolio</h1>
            <div className='item-wrapper'>{portfolioDisplay.map((item, index) => {
            return (<div key={index} className={`portfolio-display ${item.className}`}>
                <div onClick={() => openSite(item.link)}>{item.title}</div>
                <div onClick={() => openSite(item.gitHubRepo)} className="github-icon">
                </div>
                </div>
            );
})}
</div>
</div>
)
};

