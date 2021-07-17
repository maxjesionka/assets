const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('header nav');
const startPlay = document.querySelector('#start-play');
const startPlayIcon = document.querySelector('#start-play-icon');
const video = document.querySelector('#video');
const galleryItem = document.querySelectorAll('.gallery__item');
const popup = document.querySelector('.popup')
const overlay = document.querySelector('.overlay')

hamburger.addEventListener('click', function () {
    this.classList.toggle('active')
    nav.classList.toggle('active-nav')
})


startPlay.addEventListener(`click`, () => {
    const icon = startPlay.querySelector('.fas')
    icon.classList.toggle('fa-play-circle')
    icon.classList.toggle('fa-pause-circle');
    if (video.playing) {
        video.play()
    }
})

const gallery = [
    {
        id: 1,
        title: "I like Spoons",
        subtitle1: "When i was a child i had a big wooden spoon, i was carrying it everywhere at any given time",
        subtitle2: "Once a pack of wolf attacked me and i fended them off with just a spoon. In the moment of greate fear i had it with me, the battle was legendary, and the cost was greate. My mighty spoon was broken in half, with blood on my hands, anger filling my entire body i finished those pesky creatures with what was left of my wooden sword of justice. This day i was victorious, but i knew true evil is yet to come",
        client: "sir Max Jesionka",
        data: "13.09.2007",
        share: "Facebook",
        image: "img/work1.jpg"
    },
    {
        id: 2,
        title: "Owl",
        subtitle1: "I mean who wouldn want one ? They are cute, fitting almost in any household",
        subtitle2: "When someone enters your house he will notice this beauty. Big and strong, creature of the night, seems familiar? Yes, its you, almost always up till the daylight. Show them whos predator and whos mouse, make them feel like they are your dinner this night ;)",
        client: "Robert Lewandowski",
        data: "10.02.1967",
        share: "Instagram,Facebook",
        image: "img/work2.jpg"
    },
    {
        id: 3,
        title: "Pony",
        subtitle1: "Why is every little girl soo interested in ponys ? Bet you guessing yourself",
        subtitle2: "They are growing up thinking of them as male substitute, i mean not entirely but thats the only time they are in control. This is why horse propaganda should be cut immidetly. If your looking at man thats under his woman shoe you know she is familiar with the 4-hooved bastards",
        client: "Gregory Nichilson",
        data: "25.03.1978",
        share: "Twitter",
        image: "img/work3.jpg"
    },
    {
        id: 4,
        title: "Clogs",
        subtitle1: "Do you want attention ?",
        subtitle2: "Wearing those beautys you will be catching eyes like nobody else. Have that sassy walk in front of everyone, make them jealous, laugh off hipsters while walking out of starbucks. Be the king of your castle (as long as your the ony one wearing clogs)",
        client: "Edward Kenway",
        data: "07.11.1999",
        share: "Instagram",
        image: "img/work4.jpg"
    },
    {
        id: 5,
        title: "Clogs",
        subtitle1: "Do you want attention ?",
        subtitle2: "Wearing those beautys you will be catching eyes like nobody else. Have that sassy walk in front of everyone, make them jealous, laugh off hipsters while walking out of starbucks. Be the king of your castle (as long as your the ony one wearing clogs)",
        client: "Edward Kenway",
        data: "07.11.1999",
        share: "Instagram",
        image: "img/work4.jpg"
    },
    {
        id: 6,
        title: "Pony",
        subtitle1: "Why is every little girl soo interested in ponys ? Bet you guessing yourself",
        subtitle2: "They are growing up thinking of them as male substitute, i mean not entirely but thats the only time they are in control. This is why horse propaganda should be cut immidetly. If your looking at man thats under his woman shoe you know she is familiar with the 4-hooved bastards",
        client: "Gregory Nichilson",
        data: "25.03.1978",
        share: "Twitter",
        image: "img/work3.jpg"
    }, {
        id: 7,
        title: "Owl",
        subtitle1: "I mean who wouldn want one ? They are cute, fitting almost in any household",
        subtitle2: "When someone enters your house he will notice this beauty. Big and strong, creature of the night, seems familiar? Yes, its you, almost always up till the daylight. Show them whos predator and whos mouse, make them feel like they are your dinner this night ;)",
        client: "Mike Wazzowski",
        data: "10.02.1967",
        share: "Instagram,Facebook",
        image: "img/work2.jpg"
    }, {
        id: 8,
        title: "I like Spoons",
        subtitle1: "When i was a child i had a big wooden spoon, i was carrying it everywhere at any given time",
        subtitle2: "Once a pack of wolf attacked me and i fended them off with just a spoon. In the moment of greate fear i had it with me, the battle was legendary, and the cost was greate. My mighty spoon was broken in half, with blood on my hands, anger filling my entire body i finished those pesky creatures with what was left of my wooden sword of justice. This day i was victorious, but i knew true evil is yet to come",
        client: "sir Max Jesionka",
        data: "13.09.2007",
        share: "Facebook",
        image: "img/work1.jpg"
    }
]

overlay.style.visibility = "hidden"

galleryItem.forEach(item => {
    item.addEventListener('click', function () {
        console.log(item);
        overlay.style.visibility = "visible"
        document.body.style.overflowY = "hidden"
        const IdNumber = item.id.replace('item-', '');
        const clickeditem = gallery.filter(item => item.id == IdNumber);
        console.log(clickeditem);
        clickeditem.forEach(item => {
            popup.innerHTML = `
            <div class="popup__content">
                <div class="popup__container">
                <div>
                    <h3 class="popup__title">${item.title}</h3>
                    <p class="popup__subtitle">${item.subtitle1}</p>
                    <p class="popup__subtitle">${item.subtitle2}</p>
    
                    <div class="popup__data">
                        <p><b>Client:</b>${item.client}</p>
                        <p><b>Date:</b>${item.data}</p>
                        <p><b>Share:</b>${item.share}</p>
                    </div>
                </div>
                <img src="${item.image}" alt="${item.title}-image" class="popup__image">
            </div>
                <div class="popup__close-container">
                  <i class="fas fa-times popup__close" id="close-popup"></i>
                </div>
            </div>
            `

            const closePopup = document.getElementById('close-popup');
            closePopup.addEventListener('click', function (e) {
                console.log(e.target.parentElement.parentElement);
                e.target.parentElement.parentElement.classList.add('closePopup');
                overlay.style.visibility = "hidden";
                document.body.style.overflowY = "auto"
            })
        })


    })
})
