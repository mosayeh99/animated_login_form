let animeparts = document.querySelectorAll('.moveanime');
let faceparts = document.querySelectorAll('.face > *:not(.mouth)');
let fpassface = document.querySelectorAll('.fpassface > *');
let passBody = document.querySelector('.fpass-body');
let normalBody = document.querySelector('.n-body');
let pfEyelip = document.querySelector('.pf-eyelip');
let pfLeg = document.querySelector('.pf-leg');
let normalLeg = document.querySelector('.n-leg');
let fpassRwing = document.querySelector('.l-fpasswing');
let lWing = document.querySelector('.l-wing');
let rWing = document.querySelectorAll('.r-wing');
let crest = document.querySelector('.crest');
let tail = document.querySelector('.n-tail');
let lBrow = document.querySelector('.l-brow');
let rBrow = document.querySelector('.r-brow');
let lEye = document.querySelector('.l-eye');
let lEyelens = document.querySelector('.l-eye img');
let rEye = document.querySelector('.r-eye');
let rEyelens = document.querySelector('.r-eye img');
let eyelids = document.querySelectorAll('.anime .eyemove');
let mouth = document.querySelector('.mouth');
let nose = document.querySelector('.nose');
let flower = document.querySelector('.flower');

let emailFiled = document.querySelector('.email input');
let passFiled = document.querySelector('.password .pass-input input');
let emailLabel = document.querySelector('.email .emaillabel');
let passLabel = document.querySelector('.password .passlabel');
let emailmsg = document.querySelector('.emailedmsg');
let hideshowpass = document.querySelectorAll('.pass-input i');
let checkbox = document.querySelector('.toggle-checkbox');
let forgetLink =document.querySelector('.links a');


window.onload = () => {
    setTimeout(() => {
        lWing.classList.add('welcome');
    }, 300);
    setTimeout(() => {
        lWing.classList.remove('welcome');
    }, 3000);
}

closeopeneye();
function closeopeneye() {
    setTimeout(() => {
        eyelids.forEach((e) => {
            e.classList.add('fade-eye');
        });
    }, 1000)
    setTimeout(() => {
        eyelids.forEach((e) => {
            e.classList.remove('fade-eye');
        });
    }, 2000);
}

function maxlenthemail() {
    if (emailFiled.value.length > 30) {
        emailFiled.value = emailFiled.value.substring(0, 30);
    }
}

emailFiled.onfocus = () => {
    if (emailFiled.value == "") {
        lEyelens.style.cssText = "top: 2px; left: 1px;";
        rEyelens.style.cssText = "top: 2px; left: 1px;";
        rEye.style.cssText = 'left:75px; top:60px; border-radius: 5px;';
        lEye.style.cssText = 'top:60px; border-radius: 5px;';
        lBrow.style.cssText = 'top:45px;';
        rBrow.style.cssText = 'right:55px; top:45px;';
        mouth.style.cssText = 'left:50px; top:80px;';
        nose.style.cssText = "left:65px; top:68px; border-width: 0px 8px 8px 4px;";
    } else {
        closeopeneye();
        moveface();
    }
    emailLabel.style.cssText = 'top:-11px; color: #972983;';
    fpassoff();
    if (checkbox.checked == true) {
        flower.classList.add('checkedmove');
        flower.classList.remove('rotate');
    }
}

emailFiled.addEventListener('keyup', () => {
    moveface();
    maxlenthemail();
});
emailFiled.addEventListener('blur', () => {
    normalface();
    if (emailFiled.value == "") {
    emailLabel.style.cssText = 'top:11px; color: #777;';
    }
});

function normalface() {
    rEyelens.style.cssText = 'top: 1px; left: 7px;';
    lEyelens.style.cssText = 'top: 1px; left: 7px;';
    rEye.style.cssText = 'left:84px; top:52px;';
    lEye.style.cssText = 'left:46px; top:52px;';
    rBrow.style.cssText = 'right:48px; top:38px';
    lBrow.style.cssText =  'left:47px; top:38px';
    mouth.style.cssText = 'left: 60px; top:75px; height:0px;';
    nose.style.cssText = 'left:70px; top:60px; border-width: 0px 4px 8px 4px;';
    closeopeneye();
}

function moveface() {
    let x = Math.ceil(1 + (emailFiled.value.length * 0.4));
    rEyelens.style.cssText = `top: 2px; left: ${x}px;`;
    lEyelens.style.cssText = `top: 2px; left: ${x}px;`;
    rEye.style.cssText = `left:${75 + x}px; top:60px; border-radius: 5px;`;
    lEye.style.cssText = `left:${46 + x}px; top:60px; border-radius: 5px;`;
    rBrow.style.cssText = `right:${55 - x}px; top:45px`;
    lBrow.style.cssText = `left:${47 + x}px; top:45px`;
    mouth.style.cssText = `left:${Math.ceil(50 + (x * 1.3))}px; top:80px; height:${Math.ceil(x * 1.3)}px;`;
    nose.style.cssText = `left:${65 + x}px; top:68px; border-width: 0px ${Math.ceil(8 - (x * 0.3))}px 8px ${Math.ceil(4 + (x * 0.3))}px;`;
}

hideshowpass.forEach((e) => {
    e.onclick = () =>{
        if (e.classList.contains('hide-pass') == true) {
            e.style.display = 'none';
            e.nextElementSibling.style.display = 'block';
            passFiled.type = 'password';
            passFiled.focus();
        } else {
            e.style.display = 'none';
            e.previousElementSibling.style.display = 'block';
            passFiled.type = 'text';
            passFiled.focus();
            pfEyelip.style.height = '0px';
        }
    }
});

function passeyelip() {
    setTimeout(() => {
        pfEyelip.classList.add('eyemovedown');
    }, 500);
    setTimeout(() => {
        pfEyelip.classList.remove('eyemovedown');
    }, 1500);
};

passFiled.addEventListener('focus', () => {
    animeparts.forEach((e) => {
        e.classList.add('passmove');
        if (passFiled.type == 'password') {
            passeyelip();
            setTimeout(() => {
                pfEyelip.style.height = '15px';
            }, 1000);
        }
    });
    passLabel.style.cssText = 'top:-11px; color: #972983;';
    fpassoff();
    normalflower();
});

passFiled.addEventListener('blur', () => {
    if (passFiled.value == "") {
        passLabel.style.cssText = 'top:11px; color: #777;';
    }
    animeparts.forEach((e) => {
        e.classList.remove('passmove');
        setTimeout(() => {
            pfEyelip.style.height = '0px';
        }, 100);
    });
});

function wingflowermove() {
    setTimeout(() => {
        lWing.classList.add('flowermove');
    });
    setTimeout(() => {
        lWing.classList.remove('flowermove');
    }, 1500);
}

function normalflower() {
    if (checkbox.checked == true) {
        flower.classList.remove('checkedmove');
        flower.classList.add('rotate');
    }
}

checkbox.onclick = () => {
    if (checkbox.checked == true) {
        wingflowermove();
        flower.classList.add('checkedmove');
        flower.classList.remove('rotate');
    } else {
        wingflowermove();
        flower.classList.remove('checkedmove');
        flower.classList.add('rotate');
    }
    fpassoff();
}

forgetLink.addEventListener('click', (e) => {
    normalflower();
    e.preventDefault();
    faceparts.forEach((e) => {
        e.classList.add('scale-0');
    });
    fpassface.forEach((e) => {
        e.classList.add('fpass-scale');
    });
    rWing.forEach((e) => {
        e.classList.add('fpass-move');
    });
    normalBody.classList.add('op-0');
    tail.classList.add('op-0');
    mouth.classList.add('fpassmove');
    rWing[1].classList.add('op-0');
    fpassRwing.classList.add('fpass-move');
    lWing.classList.add('fpassmove');
    normalLeg.classList.add('op-0');
    emailmsg.style.display = 'block';
});

function fpassoff() {
    normalBody.classList.remove('op-0');
    tail.classList.remove('op-0');
    faceparts.forEach((e) => {
        e.classList.remove('scale-0');
    });
    fpassface.forEach((e) => {
        e.classList.remove('fpass-scale');
    });
    mouth.classList.remove('fpassmove');
    rWing.forEach((e) => {
        e.classList.remove('fpass-move');
    });
    rWing[1].classList.remove('op-0');
    fpassRwing.classList.remove('fpass-move');
    lWing.classList.remove('fpassmove');
    normalLeg.classList.remove('op-0');
}