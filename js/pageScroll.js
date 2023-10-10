const getScrollPercent = () => {
  const scrollled = window.scrollY;
  const pageHeight = document.documentElement.scrollHeight;
  const viewHeight = document.documentElement.clientHeight;
  const percentage = scrollled / (pageHeight - viewHeight) * 100;  
//  console.log(`ページ${pageHeight} 表示領域${viewHeight}`);
//  console.log(`${percentage}`);
document.querySelector('#bar').style.width = `${percentage}%`;
 }

window.addEventListener('scroll', getScrollPercent);