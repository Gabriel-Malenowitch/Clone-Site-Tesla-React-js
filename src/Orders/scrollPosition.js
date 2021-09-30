let focusSection = 'Model S'
let percent = 0

const F = {
    main(reload){


        //Definir elemento de foco
        //Definir porcentagem do elemento em foco
        /*
            50% do elemento representa 0% de opacidade 
            75% do elemento representa 50% de opacidade
            100% do elemento representa 100% de opacidade

            50% é vacuo

        */

        let n1 = window.innerHeight
        let n2 = window.innerHeight+n1
        let n3 = window.innerHeight+n2
        let n4 = window.innerHeight+n3

        let scrool = window.scrollY+(window.innerHeight*0.5)
    
    
        function getPercent(mid){
            percent = ((mid*100)/scrool/2).toFixed(0)
        }
        
        

        function visible(position){
            let n = document.getElementsByClassName("sectionCar")
            // console.log(n[0].getBoundingClientRect())
            // console.log(n[1].getBoundingClientRect())
            for (let i in n){
                console.log(i)
                if(i < 5){
                    n[i].firstElementChild.style.visibility = "hidden"
                }
                n[position].firstElementChild.style.visibility = "visible"
            }
            console.log("Caiu aqui")
        }
    
        if(scrool < n1){
            getPercent(n1)
            // console.log(n1, scrool, percent)
            visible(0)
            focusSection = 'Model 3'
        }
            if(scrool > n1 && scrool < n2){
            getPercent(n2)
            visible(1)
            // console.log(n2, scrool, percent)
            focusSection = "Model Y"
        }
        if(scrool > n2 && scrool < n3){
            getPercent(n3)
            visible(2)
            focusSection = "Model S"
        }
        if(scrool > n3 && scrool < n4){
            getPercent(n4)
            visible(3)
            focusSection = "Model X"
        }
        console.log(focusSection, "<->", percent)
  }
}
export default F
export let n = [
    focusSection,
    percent
];