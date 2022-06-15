import React from 'react';

export const CoverPictures = (props) => {
  
  const { family } = props.profiles;

  let cover;

  switch (family) {
    case 'Stark':
      cover = [
        'https://wallpapercave.com/wp/wp3090365.jpg',
        'https://wc.wallpaperuse.com/wallp/47-477669_s.jpg',
        'https://cutewallpaper.org/22/winterfell-desktop-wallpapers/1263430829.jpg',
        'https://wallpapercave.com/wp/wp3090370.jpg',
      ];
      break;
      case 'House Stark':
      cover = [
        'https://wallpapercave.com/wp/wp3090365.jpg',
        'https://wc.wallpaperuse.com/wallp/47-477669_s.jpg',
        'https://cutewallpaper.org/22/winterfell-desktop-wallpapers/1263430829.jpg',
        'https://wallpapercave.com/wp/wp3090370.jpg',
      ];
      break;
    case 'House Lannister':
      cover = [
        'https://i.pinimg.com/originals/ea/a5/f5/eaa5f59352027bd68eca18e64052da82.jpg',
        'https://www.wallpapertip.com/wmimgs/239-2390311_the-regal-lion-house-lannister-4k-ultra-hd.jpg',
        'https://www.lagardedenuit.com/wall/wp-content/uploads/2020/04/f1461c3fd9813d238f4baee21029dfcc-2100x1050.jpg',
        'https://d1e00ek4ebabms.cloudfront.net/production/1471f307-0868-4f98-b0e0-e7b0049898cd.jpg',
      ];
      break;
      case 'Lannister':
      cover = [
        'https://i.pinimg.com/originals/ea/a5/f5/eaa5f59352027bd68eca18e64052da82.jpg',
        'https://www.wallpapertip.com/wmimgs/239-2390311_the-regal-lion-house-lannister-4k-ultra-hd.jpg',
        'https://www.lagardedenuit.com/wall/wp-content/uploads/2020/04/f1461c3fd9813d238f4baee21029dfcc-2100x1050.jpg',
        'https://d1e00ek4ebabms.cloudfront.net/production/1471f307-0868-4f98-b0e0-e7b0049898cd.jpg',
      ];
      break;
    case 'House Targaryen':
      cover = [
        'https://cdn.arstechnica.net/wp-content/uploads/2019/11/house-of-the-dragon-explainer-800x450.jpg',
        'https://i.pinimg.com/originals/cf/59/1a/cf591a582c200c696c10b1f612bd1512.jpg',
        'https://fr.web.img5.acsta.net/newsv7/17/07/21/17/38/332373.jpg',
        'https://fr.web.img6.acsta.net/newsv7/19/05/02/14/39/4661162.jpg',
      ];
      break;
      case 'Targaryen':
      cover = [
        'https://cdn.arstechnica.net/wp-content/uploads/2019/11/house-of-the-dragon-explainer-800x450.jpg',
        'https://i.pinimg.com/originals/cf/59/1a/cf591a582c200c696c10b1f612bd1512.jpg',
        'https://fr.web.img5.acsta.net/newsv7/17/07/21/17/38/332373.jpg',
        'https://fr.web.img6.acsta.net/newsv7/19/05/02/14/39/4661162.jpg',
      ];
      break;
      case 'Targaryan':
      cover = [
        'https://cdn.arstechnica.net/wp-content/uploads/2019/11/house-of-the-dragon-explainer-800x450.jpg',
        'https://i.pinimg.com/originals/cf/59/1a/cf591a582c200c696c10b1f612bd1512.jpg',
        'https://fr.web.img5.acsta.net/newsv7/17/07/21/17/38/332373.jpg',
        'https://fr.web.img6.acsta.net/newsv7/19/05/02/14/39/4661162.jpg',
      ];
      break;
    case 'House Tarly':
      cover = [
        'https://i.pinimg.com/originals/5f/92/80/5f928015ca189277c92de209431f3977.jpg',
        'https://pbs.twimg.com/media/DG45fnAXYAArsJ_.jpg',
        'https://pbs.twimg.com/media/DG45fnAXYAArsJ_.jpg',
        'https://i.pinimg.com/originals/5f/92/80/5f928015ca189277c92de209431f3977.jpg',
      ];
      break;
      case 'Tarly':
      cover = [
        'https://i.pinimg.com/originals/5f/92/80/5f928015ca189277c92de209431f3977.jpg',
        'https://pbs.twimg.com/media/DG45fnAXYAArsJ_.jpg',
        'https://pbs.twimg.com/media/DG45fnAXYAArsJ_.jpg',
        'https://i.pinimg.com/originals/5f/92/80/5f928015ca189277c92de209431f3977.jpg',
      ];
      break;
    case 'House Baratheon':
      cover = [
        'https://i.ytimg.com/vi/mP6uip1Lmfc/maxresdefault.jpg',
        'https://i.pinimg.com/originals/f9/01/35/f90135a1bc7be268aec75aae18945672.jpg',
        'https://tourisme.euskadi.eus/contenidos/informacion/turismo_got_landing/es_def/images/img-san-juan-de-gaztelugatxe.jpg',
        'https://tourisme.euskadi.eus/contenidos/informacion/turismo_got_landing/es_def/images/img-san-juan-de-gaztelugatxe.jpg',
      ];
      break;
      case 'Baratheon':
      cover = [
        'https://i.ytimg.com/vi/mP6uip1Lmfc/maxresdefault.jpg',
        'https://i.pinimg.com/originals/f9/01/35/f90135a1bc7be268aec75aae18945672.jpg',
        'https://tourisme.euskadi.eus/contenidos/informacion/turismo_got_landing/es_def/images/img-san-juan-de-gaztelugatxe.jpg',
        'https://tourisme.euskadi.eus/contenidos/informacion/turismo_got_landing/es_def/images/img-san-juan-de-gaztelugatxe.jpg',
      ];
      break;
    case 'House Greyjoy':
      cover = [
        'https://fr.web.img3.acsta.net/r_1280_720/newsv7/19/04/08/12/08/38703180.jpg',
        'https://picadilist.com/wp-content/uploads/images/upload_gen/house-a-song-of-ice-and-fire-29965916-1920-1080.jpeg',
        'https://i.pinimg.com/originals/a4/d4/90/a4d490c5251614cfffe4b7b0a3ff2da2.jpg',
        'https://i.pinimg.com/originals/a4/d4/90/a4d490c5251614cfffe4b7b0a3ff2da2.jpg',
      ];
      break;
      
    case 'Greyjoy':
      cover = [
        'https://fr.web.img3.acsta.net/r_1280_720/newsv7/19/04/08/12/08/38703180.jpg',
        'https://picadilist.com/wp-content/uploads/images/upload_gen/house-a-song-of-ice-and-fire-29965916-1920-1080.jpeg',
        'https://i.pinimg.com/originals/a4/d4/90/a4d490c5251614cfffe4b7b0a3ff2da2.jpg',
        'https://i.pinimg.com/originals/a4/d4/90/a4d490c5251614cfffe4b7b0a3ff2da2.jpg',
      ];
      break;
    case 'House Clegane':
      cover = [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Bandera_de_Areatza.svg/1280px-Bandera_de_Areatza.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Bandera_de_Areatza.svg/1280px-Bandera_de_Areatza.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Bandera_de_Areatza.svg/1280px-Bandera_de_Areatza.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Bandera_de_Areatza.svg/1280px-Bandera_de_Areatza.svg.png',
      ];
      break;
      case 'Clegane':
      cover = [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Bandera_de_Areatza.svg/1280px-Bandera_de_Areatza.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Bandera_de_Areatza.svg/1280px-Bandera_de_Areatza.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Bandera_de_Areatza.svg/1280px-Bandera_de_Areatza.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Bandera_de_Areatza.svg/1280px-Bandera_de_Areatza.svg.png',
      ];
      break;
    case 'House Baelish':
      cover = [
        'https://wallpapercave.com/wp/wp2065566.jpg',
        'https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_1080,w_1920/https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2019%2F05%2F1-806-TSCap-Jon-and-Davos-LL1.jpg',
        'https://www.joyscribe.com/wp-content/uploads/2019/04/Game-of-Thrones-Aftermath.jpg',
        'https://www.joyscribe.com/wp-content/uploads/2019/04/Game-of-Thrones-Aftermath.jpg',
      ];
      break;
      case 'Baelish':
      cover = [
        'https://wallpapercave.com/wp/wp2065566.jpg',
        'https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_1080,w_1920/https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2019%2F05%2F1-806-TSCap-Jon-and-Davos-LL1.jpg',
        'https://www.joyscribe.com/wp-content/uploads/2019/04/Game-of-Thrones-Aftermath.jpg',
        'https://www.joyscribe.com/wp-content/uploads/2019/04/Game-of-Thrones-Aftermath.jpg',
      ];
      break;
    case 'House Seaworth':
      cover = [
        'https://i.pinimg.com/originals/23/bd/a7/23bda7057435deb3d0c7d4a57367f894.jpg',
        'https://i.pinimg.com/originals/23/bd/a7/23bda7057435deb3d0c7d4a57367f894.jpg',
        'https://i.pinimg.com/originals/23/bd/a7/23bda7057435deb3d0c7d4a57367f894.jpg',
        'https://i.pinimg.com/originals/23/bd/a7/23bda7057435deb3d0c7d4a57367f894.jpg',
      ];
      break;
      case 'Seaworth':
      cover = [
        'https://i.pinimg.com/originals/23/bd/a7/23bda7057435deb3d0c7d4a57367f894.jpg',
        'https://i.pinimg.com/originals/23/bd/a7/23bda7057435deb3d0c7d4a57367f894.jpg',
        'https://i.pinimg.com/originals/23/bd/a7/23bda7057435deb3d0c7d4a57367f894.jpg',
        'https://i.pinimg.com/originals/23/bd/a7/23bda7057435deb3d0c7d4a57367f894.jpg',
      ];
      break;
    case 'House Tyrell':
      cover = [
        'https://www.wardensofthemidwest.com/wp-content/uploads/2016/03/Tyrell_Sigil.jpg',
        'https://www.wardensofthemidwest.com/wp-content/uploads/2016/03/Tyrell_Sigil.jpg',
        'https://modernfarmer.com/wp-content/uploads/2014/07/highgarden.jpg',
        'https://modernfarmer.com/wp-content/uploads/2014/07/highgarden.jpg',
      ];
      break;
      case 'Tyrell':
      cover = [
        'https://www.wardensofthemidwest.com/wp-content/uploads/2016/03/Tyrell_Sigil.jpg',
        'https://www.wardensofthemidwest.com/wp-content/uploads/2016/03/Tyrell_Sigil.jpg',
        'https://modernfarmer.com/wp-content/uploads/2014/07/highgarden.jpg',
        'https://modernfarmer.com/wp-content/uploads/2014/07/highgarden.jpg',
      ];
      break;
    case 'Free Folk':
      cover = [
        'https://geo.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FGEO.2Fvar.2Fgeo.2Fstorage.2Fimages.2Fmedia.2Fen-alaska-les-ferrys-longent-le-parc-national-de-glacier-bay.2F2045676-1-fre-FR.2Fen-alaska-les-ferrys-longent-le-parc-national-de-glacier-bay.2Ejpg/1150x647/background-color/ffffff/quality/70/au-plus-pres-de-l-alaska-en-ferry.jpg',
        'https://geo.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FGEO.2Fvar.2Fgeo.2Fstorage.2Fimages.2Fmedia.2Fen-alaska-les-ferrys-longent-le-parc-national-de-glacier-bay.2F2045676-1-fre-FR.2Fen-alaska-les-ferrys-longent-le-parc-national-de-glacier-bay.2Ejpg/1150x647/background-color/ffffff/quality/70/au-plus-pres-de-l-alaska-en-ferry.jpg',
        'https://cbsnews1.cbsistatic.com/hub/i/r/2019/03/20/e5490588-cf19-4f50-b7dc-a8cbbe4e08bd/thumbnail/1200x630/750b12dcc29d066d2b953c96d25a604e/got-northofthewall.jpg',
        'https://cbsnews1.cbsistatic.com/hub/i/r/2019/03/20/e5490588-cf19-4f50-b7dc-a8cbbe4e08bd/thumbnail/1200x630/750b12dcc29d066d2b953c96d25a604e/got-northofthewall.jpg',
      ];
      break;
    case 'Tarth':
      cover = [
        'https://static.wikia.nocookie.net/game-of-thrones-le-trone-de-fer/images/e/e6/Maison_Torth.jpg/revision/latest?cb=20140119141209&path-prefix=fr',
        'https://static.wikia.nocookie.net/game-of-thrones-le-trone-de-fer/images/e/e6/Maison_Torth.jpg/revision/latest?cb=20140119141209&path-prefix=fr',
        'https://static.wikia.nocookie.net/game-of-thrones-le-trone-de-fer/images/e/e6/Maison_Torth.jpg/revision/latest?cb=20140119141209&path-prefix=fr',
        'https://static.wikia.nocookie.net/game-of-thrones-le-trone-de-fer/images/e/e6/Maison_Torth.jpg/revision/latest?cb=20140119141209&path-prefix=fr',
      ];
      break;
    case 'Naathi':
      cover = [
        'https://geo.img.pmdstatic.net/scale/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2021.2F04.2F13.2Fc4a2f3a2-a819-4330-8c18-35a5d6ec222e.2Ejpeg/autox600/quality/65/l-iconique-chateau-de-terre.jpg',
        'https://geo.img.pmdstatic.net/scale/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2021.2F04.2F13.2Fc4a2f3a2-a819-4330-8c18-35a5d6ec222e.2Ejpeg/autox600/quality/65/l-iconique-chateau-de-terre.jpg',
        'https://geo.img.pmdstatic.net/scale/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2021.2F04.2F13.2Fc4a2f3a2-a819-4330-8c18-35a5d6ec222e.2Ejpeg/autox600/quality/65/l-iconique-chateau-de-terre.jpg',
        'https://geo.img.pmdstatic.net/scale/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2021.2F04.2F13.2Fc4a2f3a2-a819-4330-8c18-35a5d6ec222e.2Ejpeg/autox600/quality/65/l-iconique-chateau-de-terre.jpg',
      ];
      break;
    case 'Bolton':
      cover = [
        'https://i.pinimg.com/originals/64/c8/c7/64c8c7a6c981e75a456b0c9de3526bd0.jpg',
        'https://i.pinimg.com/originals/64/c8/c7/64c8c7a6c981e75a456b0c9de3526bd0.jpg',
        'https://static.hitek.fr/img/actualite/ill_m/1846825992/bolton.jpg',
        'https://static.hitek.fr/img/actualite/ill_m/1846825992/bolton.jpg',
      ];
      break;
    case 'Naharis':
      cover = [
        'https://geo.img.pmdstatic.net/scale/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2021.2F04.2F13.2Fc4a2f3a2-a819-4330-8c18-35a5d6ec222e.2Ejpeg/autox600/quality/65/l-iconique-chateau-de-terre.jpg',
        'https://geo.img.pmdstatic.net/scale/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2021.2F04.2F13.2Fc4a2f3a2-a819-4330-8c18-35a5d6ec222e.2Ejpeg/autox600/quality/65/l-iconique-chateau-de-terre.jpg',
        'https://geo.img.pmdstatic.net/scale/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2021.2F04.2F13.2Fc4a2f3a2-a819-4330-8c18-35a5d6ec222e.2Ejpeg/autox600/quality/65/l-iconique-chateau-de-terre.jpg',
        'https://geo.img.pmdstatic.net/scale/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2021.2F04.2F13.2Fc4a2f3a2-a819-4330-8c18-35a5d6ec222e.2Ejpeg/autox600/quality/65/l-iconique-chateau-de-terre.jpg',
      ];
      break;
    case 'Mormont':
      cover = [
        'https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-04/daenerys.jpg',
        'https://blog.screenweek.it/wp-content/uploads/2016/07/GOT_610_daenerys_opt-1280x720.jpg',
        'https://blog.screenweek.it/wp-content/uploads/2016/07/GOT_610_daenerys_opt-1280x720.jpg',
        'https://dailygeekshow.com/wp-content/uploads/2019/05/une-dany-retro.jpg',
      ];
      break;
    case 'Martell':
      cover = [
        'https://i.pinimg.com/originals/69/eb/ad/69ebad46a16a95b559f2ffc0d141911b.jpg',
        'https://i.pinimg.com/originals/69/eb/ad/69ebad46a16a95b559f2ffc0d141911b.jpg',
        'https://i.pinimg.com/originals/69/eb/ad/69ebad46a16a95b559f2ffc0d141911b.jpg',
        'https://i.pinimg.com/originals/69/eb/ad/69ebad46a16a95b559f2ffc0d141911b.jpg',
      ];
      break;

    default:
      cover = [
        'https://www.teahub.io/photos/full/178-1784929_game-of-thrones-raven.jpg',
        'https://www.teahub.io/photos/full/178-1784929_game-of-thrones-raven.jpg',
        'https://www.teahub.io/photos/full/178-1784929_game-of-thrones-raven.jpg',
        'https://www.teahub.io/photos/full/178-1784929_game-of-thrones-raven.jpg',
      ];
      break;
  }

  return (
    <div>
      <img className='w-screen max-h-96 object-cover' alt="cover" src={cover[Math.floor(Math.random() * 4)]} />
    </div>
  );
};
