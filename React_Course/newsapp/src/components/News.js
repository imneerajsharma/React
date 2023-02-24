import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
    articles = 
        [
            {
              "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
              "author": null,
              "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
              "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
              "url": "http:/www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
              "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
              "publishedAt": "2020-04-27T11:41:47Z",
              "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
            },
            {
              "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
              "author": null,
              "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
              "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
              "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
              "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
              "publishedAt": "2020-03-30T15:26:05Z",
              "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
            },
            {
                "source": {
                  "id": "lequipe",
                  "name": "L'equipe"
                },
                "author": "L'EQUIPE",
                "title": "Le flash sports du 23 février",
                "description": "Retrouvez l'essentiel de l'actualité sportive avec votre flash L'Équipe quotidien.",
                "url": "https://www.lequipe.fr/Tous-sports/Actualites/Le-flash-sports-du-23-fevrier/1382240",
                "urlToImage": "https://medias.lequipe.fr/img-photo-jpg/-/1500000001752722/0:0,400:266-640-427-75/60b9b.jpg",
                "publishedAt": "2023-02-22T23:05:00+00:00",
                "content": "Manchester City tenu en échec à Leipzig (1-1) en huitième de finale aller de la Ligue des champions... Romelu Lukaku permet à l'Inter Milan de s'imposer face à Porto (1-0)... Nantes, Monaco et Rennes… [+118 chars]"
              },
              {
                "source": {
                  "id": "bleacher-report",
                  "name": "Bleacher Report"
                },
                "author": null,
                "title": "☄️ New &#x27;Hero Ball&#x27; Episode ☄️",
                "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
                "url": "https://bleacherreport.com/videos/371669-hero-ball-2023-allstar-special",
                "urlToImage": null,
                "publishedAt": "2023-02-22T21:52:16.6066431Z",
                "content": null
              },
              {
                "source": {
                  "id": "independent",
                  "name": "Independent"
                },
                "author": "Jane Dalton",
                "title": "Police officer shot in Northern Ireland after attack in sports complex",
                "description": "Officer shot in front of young people at football coaching session, politician suggests",
                "url": "http://www.independent.co.uk/news/uk/crime/northern-island-police-officer-shot-omagh-b2287675.html",
                "urlToImage": "https://static.independent.co.uk/2023/02/22/21/newFile-5.jpg?quality=75&width=1200&auto=webp",
                "publishedAt": "2023-02-22T21:51:52Z",
                "content": "For free real time breaking news alerts sent straight to your inbox sign up to our breaking news emails\r\nSign up to our free breaking news emails\r\nA police officer has been shot in Co Tyrone, Norther… [+1248 chars]"
              },
              {
                "source": {
                  "id": "the-irish-times",
                  "name": "The Irish Times"
                },
                "author": "Conor Gallagher, Freya McClements",
                "title": "PSNI detective shot at sports centre in Omagh",
                "description": "Police are searching for two suspects after shooting during football coaching session",
                "url": "https://www.irishtimes.com/crime-law/2023/02/22/off-duty-police-officer-shot-in-omagh/",
                "urlToImage": "https://www.irishtimes.com/resizer/hA--1NecMZBLAQQy5lArxHucZq8=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/ARVRMG5SE54EBVSLR46WCUIOZ4.jpg",
                "publishedAt": "2023-02-22T21:28:20Z",
                "content": "An off-duty police officer has been shot at a sports complex in Omagh, Co Tyrone.\r\nThe injured man is understood to be a detective inspector.\r\nHe was shot at Youth Sport Omagh while football coaching… [+1942 chars]"
              },
              {
                "source": {
                  "id": "bleacher-report",
                  "name": "Bleacher Report"
                },
                "author": null,
                "title": "&#x27;The Voncast&#x27; with Myles Garrett",
                "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
                "url": "https://bleacherreport.com/videos/304730-the-voncast-with-myles-garrett",
                "urlToImage": null,
                "publishedAt": "2022-12-01T18:52:49.4768049Z",
                "content": "Myles Garrett and Von Miller talk playing in the NBA, pick their dream NFL defense and more"
              },
              {
                "source": {
                  "id": "the-washington-times",
                  "name": "The Washington Times"
                },
                "author": "The Washington Times https://www.washingtontimes.com",
                "title": "Latest Quizzes",
                "description": "Take a break from the hard news of the day and enjoy a quiz on entertainment, sports, history and politics only from The Washington Times.",
                "url": "https://www.washingtontimes.com/quiz/",
                "urlToImage": null,
                "publishedAt": "2022-08-30T16:37:43.8583104Z",
                "content": "Featured Quizzes\r\nTake the challenge to learn about the life and career highlights of famed nonagenarian actress and comedian Betty White.\r\n Shares \r\nRead our synopsis and correctly identify a litera… [+32510 chars]"
              }
          ]
    
    constructor(){
        super();
        console.log("Hello!! i am a  from news component")
        this.state={
            articles:this.articles,
            loading:false
        }
    }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsFox - Top Headlines</h2>
        
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-3" key={element.url}>
            <NewsItem  title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
            
        })}
        </div>
      </div>
    )
  }
}

export default News
