async function loadJSON (url){
  const res = await fetch(url);
  //console.log(res);
  return await res.json();
}

loadJSON('').then(data => {
  console.log(data);
});
