let btn = document.querySelectorAll('.btn')


let listener = () => {

    btn.forEach((element) => {
        element.addEventListener('click', () => {
    
            let removed = animals.filter((animal) => {
                return animal.id != element.id;
            })
    
            animals = removed;
    
            console.log(animals)
            render()
        })
    });
}

let render = () => {
    cont.innerHTML = '';
    animals.forEach((ele) => {
        let box = document.createElement('div');
        box.innerText = ele.name;

        let button = document.createElement('div');
        button.className = 'btn';
        button.id = ele.id;
        button.innerText = 'X'
        box.append(button)

        cont.append(box);
        btn = document.querySelectorAll('.btn');
    })

    listener ()
}
render ()