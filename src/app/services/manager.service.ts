import { Injectable } from '@angular/core';
import { Photo } from '../models/photo.model';

@Injectable()
export class Manager {
  constructor () {

  }

  getPhotos () {
    let photos = [
      {
        description: 'asd fgr rge f',
        url: "https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/13704292_1735814996635738_1187474150_n.jpg?ig_cache_key=MTMxMTc5NjQwNDgyMjA2MTI1MA%3D%3D.2"
      },
      {
        description: 'adfgga',
        url: "https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/13724577_268769010166359_935544249_n.jpg?ig_cache_key=MTMwNzI5MjY2Nzc3MjQ0MTE2OQ%3D%3D.2"
      },
      {
        description: 'adsfgdfgdfge f',
        url: "https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/13743063_601947463313472_1891050722_n.jpg?ig_cache_key=MTMwMTQ2NDY0MTAxNzAzMTgwMw%3D%3D.2"
      },
      {
        description: 'as123123123e f',
        url: "https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/13731147_750148121794091_1633343727_n.jpg?ig_cache_key=MTI5Mzg5NTA3Nzk1MzcxNzk2NQ%3D%3D.2"
      },
      {
        description: 'asasdasd rge f',
        url: "https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/13534514_563297357206644_1033670960_n.jpg?ig_cache_key=MTI4Njk5ODA0NjcyMzIxMjA4NA%3D%3D.2"
      },
      {
        description: 'dgoipjewjkf',
        url: "https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/13129326_1691941641060657_1553879214_n.jpg?ig_cache_key=MTI0MDk3NjM4OTk3NDA5NDMzMA%3D%3D.2"
      },
      {
        description: 'asd fgr rge f',
        url: "https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/13704292_1735814996635738_1187474150_n.jpg?ig_cache_key=MTMxMTc5NjQwNDgyMjA2MTI1MA%3D%3D.2"
      },
      {
        description: 'adfgga',
        url: "https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/13724577_268769010166359_935544249_n.jpg?ig_cache_key=MTMwNzI5MjY2Nzc3MjQ0MTE2OQ%3D%3D.2"
      },
      {
        description: 'adsfgdfgdfge f',
        url: "https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/13743063_601947463313472_1891050722_n.jpg?ig_cache_key=MTMwMTQ2NDY0MTAxNzAzMTgwMw%3D%3D.2"
      },
      {
        description: 'as123123123e f',
        url: "https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/13731147_750148121794091_1633343727_n.jpg?ig_cache_key=MTI5Mzg5NTA3Nzk1MzcxNzk2NQ%3D%3D.2"
      },
      {
        description: 'asasdasd rge f',
        url: "https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/13534514_563297357206644_1033670960_n.jpg?ig_cache_key=MTI4Njk5ODA0NjcyMzIxMjA4NA%3D%3D.2"
      },
      {
        description: 'dgoipjewjkf',
        url: "https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/13129326_1691941641060657_1553879214_n.jpg?ig_cache_key=MTI0MDk3NjM4OTk3NDA5NDMzMA%3D%3D.2"
      },
      {
        description: 'asd fgr rge f',
        url: "https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/13704292_1735814996635738_1187474150_n.jpg?ig_cache_key=MTMxMTc5NjQwNDgyMjA2MTI1MA%3D%3D.2"
      },
      {
        description: 'adfgga',
        url: "https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/13724577_268769010166359_935544249_n.jpg?ig_cache_key=MTMwNzI5MjY2Nzc3MjQ0MTE2OQ%3D%3D.2"
      },
      {
        description: 'adsfgdfgdfge f',
        url: "https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/13743063_601947463313472_1891050722_n.jpg?ig_cache_key=MTMwMTQ2NDY0MTAxNzAzMTgwMw%3D%3D.2"
      },
      {
        description: 'as123123123e f',
        url: "https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/13731147_750148121794091_1633343727_n.jpg?ig_cache_key=MTI5Mzg5NTA3Nzk1MzcxNzk2NQ%3D%3D.2"
      },
      {
        description: 'asasdasd rge f',
        url: "https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/13534514_563297357206644_1033670960_n.jpg?ig_cache_key=MTI4Njk5ODA0NjcyMzIxMjA4NA%3D%3D.2"
      },
      {
        description: 'dgoipjewjkf',
        url: "https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/13129326_1691941641060657_1553879214_n.jpg?ig_cache_key=MTI0MDk3NjM4OTk3NDA5NDMzMA%3D%3D.2"
      },
      {
        description: 'asd fgr rge f',
        url: "https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/13704292_1735814996635738_1187474150_n.jpg?ig_cache_key=MTMxMTc5NjQwNDgyMjA2MTI1MA%3D%3D.2"
      },
      {
        description: 'adfgga',
        url: "https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/13724577_268769010166359_935544249_n.jpg?ig_cache_key=MTMwNzI5MjY2Nzc3MjQ0MTE2OQ%3D%3D.2"
      },
      {
        description: 'adsfgdfgdfge f',
        url: "https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/13743063_601947463313472_1891050722_n.jpg?ig_cache_key=MTMwMTQ2NDY0MTAxNzAzMTgwMw%3D%3D.2"
      },
      {
        description: 'as123123123e f',
        url: "https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/13731147_750148121794091_1633343727_n.jpg?ig_cache_key=MTI5Mzg5NTA3Nzk1MzcxNzk2NQ%3D%3D.2"
      },
      {
        description: 'asasdasd rge f',
        url: "https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/13534514_563297357206644_1033670960_n.jpg?ig_cache_key=MTI4Njk5ODA0NjcyMzIxMjA4NA%3D%3D.2"
      },
      {
        description: 'dgoipjewjkf',
        url: "https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e35/13129326_1691941641060657_1553879214_n.jpg?ig_cache_key=MTI0MDk3NjM4OTk3NDA5NDMzMA%3D%3D.2"
      }
    ];

    return photos.map(p => {
      return new Photo(p.description, p.url)
    });
  }
}
