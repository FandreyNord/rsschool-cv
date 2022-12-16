 let button = document.getElementById('codewars')
    let codewars__code = document.getElementById('codewars__code')
    let i = 0
    let code = `<pre>
            function formatDuration (time) {
    let normalTime=''
    
    let years = Math.trunc(time/(60*60*24*365))
    time = time - years*60*60*24*365
    
    let days = Math.trunc(time/(60*60*24))
    time = time - days*60*60*24
    
    let hours = Math.trunc(time/(60*60))
    time = time - hours*60*60
    
    let minutes = Math.trunc(time/(60))
    
    let seconds = time - minutes*60
    
    if (years!=0)
      if(years!=1)
        normalTime = normalTime+` + "${years} years," +`
        else
          normalTime = normalTime+` + "${years} year,"+`
          
    if (days!=0)
      if(days!=1)
        normalTime = normalTime+` + "${days} days,"+`
        else
          normalTime = normalTime+` + "${days} day,"+`
          
    if (hours!=0)
      if(hours!=1)
        normalTime = normalTime+` + "${hours} hours,"+`
        else
          normalTime = normalTime+` + "${hours} hour,"+`
          
    if (minutes!=0)
      if(minutes!=1)
        normalTime = normalTime+` + "${minutes} minutes,"+`
        else
          normalTime = normalTime+` + "${minutes} minute,"+`
          
    if (seconds!=0)
      if(seconds!=1)
        normalTime = normalTime+` + "${seconds} seconds,"+`
        else
          normalTime = normalTime+` + "${seconds} second,"+`
          
    let array = normalTime.split('')
    let count = 0
    let i = array.length
    
    while(count <2){
      if(array[i]==' '){
        count++
      }
      i--
      if (i<0)
        count++
    }
    
    if (i>0)
      array[i]=' and'
    
    array.pop()
    array.shift()
    
    if (array.join('')=='')
      return 'now'
    return array.join('')
  }
          </pre>`

  document.querySelector("#codewars").onclick = function(){
    if (i%2===0){
      button.innerHTML = '♠'
      codewars__code.innerHTML = code
    }
    else {
      button.innerHTML = '♥'
      codewars__code.innerHTML = ''
    }
    i++
    console.log('')
  }