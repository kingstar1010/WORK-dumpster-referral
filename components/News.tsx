export default function News({title, keywords, content}) {
    return (
        <div className="flex mb-40" style={{ background: '#2d394e'}}>
          <div className="p-25 w-70">
            <div className="font-45">{title}</div>
            <div className="m-20">
              <span className="font-bold mr-15 p-6">With</span>
              {
                keywords.map(key=><span className="mr-15 p-6" style={{ background:'#566785'}}>{key}</span>)
              }              
            </div>
            <div>{content}</div>
            <div className="w-200 mt-20 p-10" style={{ background:'#566785'}}>Read More &gt; </div>
          </div>
          <div className="m-25 w-30" style={{background: '#d9d9d9'}}></div>
        </div>
    );
  }