const loadData=async(search)=>{
    const response=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
    const data=await response.json()
    // console.log(data)
    display(data)
    displayLastPart(data)
}

const searchData=async(data)=>{

 let searchFiled = document.getElementById('searchFiled')
 let search = searchFiled.value
 console.log(search)
 searchFiled.value=""
loadData(search)
 }
const display=async(data)=>{
    const phonetics =data[0].phonetics
    const audio =phonetics.find(abc => abc.audio !== "")
    const meanings =data[0].meanings[0].definitions
    
    console.log(meanings)
const div=document.createElement('div')
div.innerHTML=`
<strong class="text-xl text-gray-700">Word: ${data[0].word}</strong>
<strong class="block text-xl  mt-1 text-gray-700">Pronunciation:</strong>
<audio controls class="mt-2">
 <source src=${audio.audio} type="audio/mpeg">
 
  Your browser does not support the audio element.
 </audio>

   
    `
const pronunciation=document.getElementById('pronunciation')
pronunciation.innerHTML=`
`
pronunciation.appendChild(div)
}

const displayLastPart=async(data)=>{
   const div=document.createElement('div')
   div.innerHTML=`
   <p class="mt-2"><strong>Definition:</strong> ${data[0].meanings[0].definitions[0]}</p>
   <p class="mt-2"><strong>Part of Speech:</strong> ${data[0].meanings[0].partOfSpeech}</p>
   <p class="mt-2"><strong>Synonyms:</strong> ${data[0].meanings[0]. synonyms}</p>
   <p class="mt-2"><strong>Antonyms:</strong> ${data[0].meanings[0].antonyms}</p>
   <p class="mt-2"><strong>Example:${data[0].meanings[0].example}</strong></p>
   `

   const wordDetails=document.getElementById('wordDetails')
   wordDetails.innerHTML=`
   `
   wordDetails.appendChild(div)
}





// searchData()
// loadData()




// const loadData=async(searchValue)=>{
//     const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`)
//     const json =await response.json()
    
//     const data =json[0]
//     // console.log(data)
//     searchData(json)
    
    
   
// }
// const searchData =(data)=>{
//     // // console.log(data)
//     const phone =data.phonetics
//     //   console.log(phone)
//     const audioObj = phone.find(obj=> obj.audio !== "");
//     if(audioObj){
//         const audioURL =audioObj.audio;
//         console.log(audioURL)
//     }
//     else {
//         console.log("no audio found")
//     }
//     // const phonetics = data.phonetics;
//     // if (phonetics.length > 0) {
//     //   // Use find to get the first object with a non-empty audio field
//     //   const audioObj = phonetics.find(obj => obj.audio !== "");
//     //   if (audioObj) {
//     //     const audioURL = audioObj.audio;
//     //     console.log(audioURL);
//     //   } else {
//     //     console.log("no audio found");
//     //   }
//     // } else {
//     //   console.log("No phonetics data found");
//     // }
//     let searchFiled =document.getElementById('searchFiled')
//     let searchValue =searchFiled.value
//     // searchFiled =''

//     console.log(searchValue)
//     loadData(searchValue)
    
    
// }

loadData()


