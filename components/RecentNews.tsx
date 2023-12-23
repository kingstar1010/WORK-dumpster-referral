import style from './RecentNews.module.scss';
import News from './News';

export default function RecentNews() {
    const data = [
      {
        title: 'Grosse lsle Cleanup',
        keywords: ['*Your Dumpster Guy* Dumpster Rentals', 'AWS Landscaping'],
        content: 'In a recent project on Grosse ile, our skilled contractor team undertook a comprehensive cleanup job for a local homeowner. They effciently cleared away years of accumulated debris and restored the property natural beauty. ...'
      },
      {
        title: 'Grosse lsle Cleanup',
        keywords: ['*Your Dumpster Guy* Dumpster Rentals', 'AWS Landscaping'],
        content: 'In a recent project on Grosse ile, our skilled contractor team undertook a comprehensive cleanup job for a local homeowner. They effciently cleared away years of accumulated debris and restored the property natural beauty. ...'
      },
    ]
    return (
      <div className={`${style.rnews}`}>
        <div className="font-50 mb-15">Recent News</div>
        <div className="m-auto pl-15 pt-5 pb-5" style={{ background: '#606773'}}>August 2023</div>
        {
          data.map( item => 
            <News title={item.title} keywords={item.keywords} content={item.content} />
          )
        }
      </div>
    );
  }