async function loadJSON (url){
  const res = await fetch(url);
  //console.log(res);
  return await res.json();
}

loadJSON('../1.json').then(data => {
  console.log(data);
});
