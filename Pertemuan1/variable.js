// Variable: wadah untuk menyimpan nilai

// syarat syarat untuk membuat variable
//Deklarasikan dengan :var,let, atau const
//Buat nama vaiablenya: 
    //- tidak boleh didahului dengan angka
    //- tidak boleh ada spasi dalam penamaan
    //- boleh menggunakan underscore (_) atau $
// masukan nilainya

// var hewan = "kucing"
// console.log(hewan)

//Variable itu mutable: variable itu dapat diubah

// var hewan = "kucing"
// hewan = "anjing"
// hewan = "babi"
// hewan = "monyet"

// console.log(hewan)

//Perbedaan var let const

//var dan let mutable sedangkan const tidak mutable
// const buah = 'mangga'
// buah ="melon"

// console.log(buah)


//var bisa redeclarate, sedangkan let dan const tidak bisa di deklarasikan ulang
// const angka = 12
// const angka = 13

// console.log(angka)




//Bermain dengan scope
//disebut global scope
//local scope

//var bersifat global scope, seddangkan let dan const bersifat locl scope


var angka = 1
{
    //scope 1

    var angka = 2
    
    
     {
        //scope2
        var angka = 3
       
     }

    
}
console.log(angka)




