$(document).ready(function(){

    function random(min, max) {
        return Math.floor(Math.random()*(max-min)+min)    
    }
    
    const min = 1
    const max = 100
    
    
    
    $('#num1').text(random(min, max))
    $('#num2').text(random(min, max))
    
    $('#again').hide()
    
    $('#again').click(()=>{
        $('#num1').empty()
        $('#num2').empty()
        $('#num1').text(random(min, max))
        $('#num2').text(random(min, max))
        $('#cek').removeAttr('disabled')
        $('#jawab').val('')
        $('#again').hide()
    })
    
    
    let benar =[]
    let salah = []
    
    $('#cek').click(()=>{
        const jawab = $('#jawab').val()
        const num1 = parseInt($('#num1').text())
        const num2 = parseInt($('#num2').text())
        if (jawab == (num1+num2)) {
            benar.push(1)
            $('#again').show()
            $('#cek').attr('disabled','true')
        }else if (jawab == 0){
            alert('Masukkan jawabannya dulu')
        }else{
            salah.push(1)
            $('#again').show()
            $('#cek').attr('disabled','true')
        }
        
        $('#benar').text(benar.length)
        $('#salah').text(salah.length)
    })
    
    
    
    
    
    
    })