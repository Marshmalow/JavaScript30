const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

const cosmetics = [{ name: 'perfume', size: 3, price: 'high'}, 
                   { name: 'cream' , size: 1, price: 'low'}];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#006400';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('Hello');

    let name = 'Karina';
    // Interpolated
    console.log('My name is %s :D', 'Kari');
    console.log(`Hello ${name}`);

    // Styled
    // console.log('%cI am some great text', 'font-size: 50px; background: red; text-shadow: 10px 10px 0 blue;');

    // warning!
    console.warn('Are you sure to execute this code???');

    // Error :|
    console.error('I am really bad error');

    // Info
    console.info('Just a piece of information :P');

    // Testing
    const p = document.querySelector('p');

    console.assert(p.classList.contains('ouch'), 'That is wrong!');

    // clearing
    console.clear();

    // Viewing DOM Elements
    let m = document.getElementsByTagName('h1');
    console.log(m[0].textContent);

    console.log(p);
    console.dir(p);

    console.clear();

    // Grouping together
    console.table(dogs);

    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`);
        console.groupEnd(`${dog.name}`);
    });
    
    // console.log('%c My cosmetics wardrobe', 'font-size: 30px;font-weight: bold');
    // cosmetics.forEach(cosmetic => {        
    //     console.groupCollapsed(`${cosmetic.name}`);
    //     console.log(`This is ${cosmetic.name}`);
    //     console.log(`price: ${cosmetic.price}`);
    //     console.log(`size: ${cosmetic.size}`);
    //     console.groupEnd(`${cosmetic.name}`);
    // })

    // counting
    console.count('Wes');
    console.count('Wes');
    console.count('Wes');
    console.count('Wes');
    console.count('Wes');
    console.count('Wes');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/marshmalow')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

    
