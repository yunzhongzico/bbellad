const IMAGES = [
  'https://cdn02.nyheter24.se/150ada9d07d40327020000000002022001/2015/05/22/1085498/ste_premiar_iron_1924249.jpg',
  'https://medier.talentum.com/ponIltIpIv-1482925948/media/Dagensmedia/vt6vjv-Is.jpg/alternates/FREE_640/Is.jpg',
  'https://files.baaam.se/uploads/2016/12/blondinbella.skjorta-700x1021.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Isabella_L%C3%B6wengrip_%28Blondinbella%29_2012-09-28_001.jpg/250px-Isabella_L%C3%B6wengrip_%28Blondinbella%29_2012-09-28_001.jpg',
  'https://d.cdn-expressen.se/images/19/5c/195c174932654eba8f9a6357eb306698/annan/632@60.jpg',
  'https://stoppapressarna.se/sites/default/files/styles/flexslider_full/public/artikelalbum/blondinbella_lyx4_0.jpg',
  'https://files.elle.se/uploads/fly-images/212452/Blondinbella-2-980x515.jpg',
  'https://stoppapressarna.se/sites/default/files/styles/flexslider_full/public/artikelalbum/blondinbella_overgrepp_stor1_1.jpg',
  'https://i.ytimg.com/vi/k_volGAyzqE/maxresdefault.jpg',
  'https://eu-central-1.tchyn.io/unitedbloggers-sweden-production/uploads/sites/21/2016/05/blondinbella-guitarhero.jpg?quality=90',
  'https://cdn3.blovcdn.com/bloglovin/aHR0cHMlM0ElMkYlMkZldS1jZW50cmFsLTEudGNoeW4uaW8lMkZ1bml0ZWRibG9nZ2Vycy1zd2VkZW4tcHJvZHVjdGlvbiUyRnVwbG9hZHMlMkZzaXRlcyUyRjIxJTJGMjAxNiUyRjA3JTJGSXNhYmVsbGEtTG8lMjVDQyUyNTg4d2VuZ3JpcC1zb21tYXJsb29rLmpwZyUzRnJlc2l6ZSUzRDE5MzIlMkMyNTc2JTI2cXVhbGl0eSUzRDQ1?checksum=b53ec62dd6a55e00f33b1469e1f559913776274a&format=j',
  'https://cdn2.blovcdn.com/bloglovin/aHR0cHMlM0ElMkYlMkZldS1jZW50cmFsLTEudGNoeW4uaW8lMkZ1bml0ZWRibG9nZ2Vycy1zd2VkZW4tcHJvZHVjdGlvbiUyRnVwbG9hZHMlMkZzaXRlcyUyRjIxJTJGMjAxNiUyRjA4JTJGSU1HXzE0MDYuanBnJTNGcmVzaXplJTNEMTAyMCUyQzEzMzglMjZxdWFsaXR5JTNEODk=?checksum=83aa5bf51c6acacb108212c7d50a1042d2f6c735&format=j',
  'https://www.resume.se/globalassets/resume/nyheter/2010/11/23/blondinbellas-egoboost-bli/bella.jpg'
]

function replaceImages () {
  const imgs = Array.prototype.slice.call(document.body.getElementsByTagName('img'))
  imgs.forEach(img => {
    if (IMAGES.includes(img.src)) return
    img.src = IMAGES[Math.floor(Math.random() * IMAGES.length)]
    img.removeAttribute('srcset')
    const parent = img.parentElement
    console.log('PARENTNAME', parent.nodeName)
    if (parent.nodeName === 'PICTURE') {
      const sources = Array.prototype.slice.call(parent.getElementsByTagName('source'))
      sources.forEach(source => parent.removeChild(source))
    }
  })
}

replaceImages()

setInterval(replaceImages, 1000);
