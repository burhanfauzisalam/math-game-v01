$(document).ready(function() {

    var num1 = Math.floor(Math.random() * 100)
    var num2 = Math.floor(Math.random() * 100)
    var num3 = Math.floor(Math.random() * 100)

    var sum = num1 + num2
        a = num1+num3
        b = num3+num2
        c = num2+num2
        arr = [sum, a, b, c]
        acak = arr.sort(() => Math.random() - 0.5)

    $('#soal').html(`
        <h1>${num1} + ${num2} = ?</h1>
    `)

    for (let i=0; i<4; i++) {
        $('#pilihan').append(`
            <button class="pilihan btn btn-success"><b>${acak[i]}</b></button>
        `)
        $('.pilihan').eq(i).click( () => {
            var pil = $('.pilihan').eq(i).html()
            console.log(pil)
            if (pil == sum) {
                $('#jawaban').html(`<h3>Benar, jawabannya adalah ${sum}</h3>`)
    
            } else {
                $('#jawaban').html(`<h3>Maaf, jawabannya adalah ${sum}</h3>`)
            }
            $('#lagi').append(`<button class="btn btn-info"><b>Main lagi</b></button>`).click( () => location.replace(location.href))
            $('.pilihan').attr('disabled', 'true')
        })
    }
});