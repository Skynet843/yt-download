import axios from "axios";
import {useState} from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import Reso from "./Reso";
function SongCard(props) {
  const [linksActive, set_linksActive]=useState(false);

  let file = new Array();
  const [files, set_files] = useState([]);
    // const [files, set_files] = useState([{name: 'mp3', link: 'undefined'},
    // {name: '144p', link: 'https://redirector.googlevideo.com/videoplayback?e…s1iAGsRs%3D&ratebypass=yes&utmg=ytap1_hcMzwMrr1tE'},
    // {name: '360p', link: 'https://redirector.googlevideo.com/videoplayback?e…IHR6kgNXcAOQv0is1iAGsRs%3D&utmg=ytap1_hcMzwMrr1tE'},
    // {name: '720p', link: 'https://redirector.googlevideo.com/videoplayback?e…IHR6kgNXcAOQv0is1iAGsRs%3D&utmg=ytap1_hcMzwMrr1tE'},
    // {name: '240p', link: 'https://redirector.googlevideo.com/videoplayback?e…s1iAGsRs%3D&ratebypass=yes&utmg=ytap1_hcMzwMrr1tE'},
    // {name: '360p', link: 'https://redirector.googlevideo.com/videoplayback?e…s1iAGsRs%3D&ratebypass=yes&utmg=ytap1_hcMzwMrr1tE'},
    // {name: '480p', link: 'https://redirector.googlevideo.com/videoplayback?e…s1iAGsRs%3D&ratebypass=yes&utmg=ytap1_hcMzwMrr1tE'},
    // {name: '720p', link: 'https://redirector.googlevideo.com/videoplayback?e…s1iAGsRs%3D&ratebypass=yes&utmg=ytap1_hcMzwMrr1tE'},
    // {name: '1080p', link: 'https://redirector.googlevideo.com/videoplayback?e…s1iAGsRs%3D&ratebypass=yes&utmg=ytap1_hcMzwMrr1tE'}]);
  
  
  
  
    const getLinks = async () => {
    let options = {
      method: "GET",
      url: "https://youtube-mp36.p.rapidapi.com/dl",
      params: { id: `${props.obj.video.videoId}` },
      headers: {
        "x-rapidapi-host": "youtube-mp36.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.REACT_APP_SECRET_API_KEY}`
        // "x-rapidapi-key": "29709f4ab4mshef15f1767b2f641p1df7a5jsn08d7fc98458f",
      },
    };

    let responce = await axios.request(options);
    file.push({
      name: "mp3",
      link: `${responce.data.link}`,
    });
    // console.log(responce);

    options = {
      method: "GET",
      url: "https://ytstream-download-youtube-videos.p.rapidapi.com/dl",
      params: { id: `${props.obj.video.videoId}`, geo: "IN" },
      headers: {
        "x-rapidapi-host": "ytstream-download-youtube-videos.p.rapidapi.com",
        "x-rapidapi-key": "29709f4ab4mshef15f1767b2f641p1df7a5jsn08d7fc98458f",
      },
    };

    responce = await axios.request(options);
    // console.log(responce);

    for (const key in responce.data.link) {
      if (responce.data.link[key][3] === "OK") {
        break;
      }
      file.push({
        name: `${responce.data.link[key][3]}`,
        link: `${responce.data.link[key][0]}`,
      });

      // if (Object.hasOwnProperty.call(responce.data.link, key)) {
      //   const element = responce.data.link[key];

      // }
    }
    // console.log(files);
    set_files(file);
  };
  let indx=props.obj.video.thumbnails.length-1;

  let link=`https://www.youtube.com/watch?v=${props.obj.video.videoId}`
  return (
    <>
      <div className="squrecard flex flex-di-co flex-ai-c flex-jc-sb"
      style={{
          width: `296px`
      }}
      >
        <div
          className=" pic"
          style={{
            background:
              `url('${props.obj.video.thumbnails[indx].url}') center center no-repeat`,
              height: `166px`
              // height: `${props.obj.video.thumbnails[2].height}px`
          }}
          href={link}
        >
          <div className="videoLeanth position-re">
              {props.obj.video.lengthText}
              </div>
        </div>
        <div className="box flex flex-ai-c flex-di-co flex-jc-sb">
        <div className="title">{props.obj.video.title}</div>
        <div className="channel"><span> {props.obj.video.channelName}</span>{props.obj.video.viewCountText}</div>
       
        <div className="btn flex flex-di-rr">
        <OutsideClickHandler 
          onOutsideClick={(e) => {
            // console.log(e)
            set_linksActive(false)
            // e.stopImmediatePropagation();
          }}>
            <div className="downlod flex flex-ai-c"
            onClick={()=>{
              getLinks();
              set_linksActive(true);
            }}
            >
           <span>Download
               </span> 
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-down" className="svg-inline--fa fa-arrow-alt-circle-down fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM212 140v116h-70.9c-10.7 0-16.1 13-8.5 20.5l114.9 114.3c4.7 4.7 12.2 4.7 16.9 0l114.9-114.3c7.6-7.6 2.2-20.5-8.5-20.5H300V140c0-6.6-5.4-12-12-12h-64c-6.6 0-12 5.4-12 12z"></path></svg>
            </div>
        </OutsideClickHandler>
        <div className={
                linksActive ?"links position-st flex flex-di-co flex-ai-c flex-jc-c ":"display-none"
            }
            >

<div className="position-ab flex flex-di-co"
              style={{
                top:'0',
                right:"5px"
              }}
              >

            {files.length > 0 &&
              files.map((value) => {
                //   console.log(value)
                return <Reso 
                // key={value.name}
                obj={value} />;
              })}
            </div>
           
        </div></div>
      </div></div>
    </>
  );
}

export default SongCard;
