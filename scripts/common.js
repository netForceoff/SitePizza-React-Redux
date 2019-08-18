var addClass = function (className, element) {
  var classNames = element.className.split(' ');

  if (classNames.indexOf(className) === -1) {
    classNames.push(className);
  }

  element.className = classNames.join(' ');
};

var removeClass = function (className, element) {
  var classNames = element.className.split(' ');
  var newClassNames = [];

  for (var i = 0; i < classNames.length; i++) {
    if (classNames[i] !== className) {
      newClassNames.push(classNames[i]);
    }
  }

  element.className = newClassNames.join(' ');
};

var deepExtend = function () {
  let resultObject = {};

  for (let i = 0; i < arguments.length; i++) {
    let obj = arguments[i];

    if (!obj) {
      continue;
    }

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (Array.isArray(obj)) {
          resultObject[key] = obj[key].slice();
        } else if (typeof obj[key] === 'object') {
          resultObject[key] = deepExtend(resultObject[key], obj[key]);
        } else {
          resultObject[key] = obj[key];
        }
      }
    }
  }

  return resultObject;
};


var MenuSearch = function (config) {
  this.init = function () {
    if (config && config.element) {
      this.element = config.element;
      return api;
    }

    return undefined;
  };

  this.hide = function () {
    addClass('hidden', this.element);
  };

  this.show = function () {
    removeClass('hidden', this.element);
  };

  var api = {
    hide: this.hide.bind(this),
    show: this.show.bind(this)
  };

  return this.init();
};

var Menu = function (config) {
  this.init = function () {
    if (config && config.id) {
      this.config = config;
      this.element = document.querySelector('#' + this.config.id);
      this.closeButton = this.element.querySelector('.js-close');
      this.openButton = this.element.querySelector('.js-open');
      this.menu = this.element.querySelector('.js-menu');
      var search = this.element.querySelector('.js-search');
      this.search = new MenuSearch({element: search});

      this.attachEvents();
      this.closeMenu();

      return api;
    }

    return undefined;
  };

  this.closeMenu = function () {
    addClass('hidden', this.closeButton);
    addClass('hidden', this.menu);
    removeClass('hidden', this.openButton);
    this.search.hide();
  };

  this.openMenu = function () {
    removeClass('hidden', this.closeButton);
    removeClass('hidden', this.menu);
    addClass('hidden', this.openButton);
    this.search.show();
  };

  this.attachEvents = function () {
    this.openButton.addEventListener('click', this.openMenu.bind(this));
    this.closeButton.addEventListener('click', this.closeMenu.bind(this));
  };

  var api = {
    close: this.closeMenu.bind(this),
    open: this.openMenu.bind(this)
  };

  return this.init();
};

var FormCallNumber = function (config) {
  this.init = function () {
    if (config && config.id) {
      this.config = config;
      this.element = document.querySelector('#' + this.config.id);
      this.closeButton = this.element.querySelector('.form__closeForm_button');
      this.openButton = document.querySelector('.header__item-callUs');
      this.cancelButton = this.element.querySelector('.cancel__button');

      this.windowPopUp = document.querySelector('.popUp__window');

      this.attachEvents();
    }
    return undefined;
  };

  this.openForm = function () {
    removeClass('hidden', this.element);
    removeClass('hidden', this.windowPopUp);
    this.windowPopUp.appendChild(this.element);
  };

  this.closeForm = function () {
    addClass('hidden', this.element);
    addClass('hidden', this.windowPopUp);
    this.windowPopUp.removeChild(this.element);
  };

  this.attachEvents = function () {
    this.closeButton.addEventListener('click', this.closeForm.bind(this));
    this.cancelButton.addEventListener('click', this.closeForm.bind(this));
    this.openButton.addEventListener('click', this.openForm.bind(this));
  };

  return this.init()
};

var FormRegistration = function (config) {
  this.init = function () {
    if (config && config.id) {
      this.config = config;
      this.element = document.querySelector('#'  + this.config.id);
      this.closeButton = this.element.querySelector('.form__closeForm_button');
      this.openButton = document.querySelector('.privateAccount_button');

      this.buttonSignIn = this.element.querySelector('.form__signIn');
      this.textForRegistration = this.element.querySelector('.form__registrationText');
      this.formHeader = this.element.querySelector('.form_header');

      this.buttonShowPassword = this.element.querySelector('.form__showPassword');
      this.inputFormPassword = this.element.querySelector('.form__inputPassword');

      this.windowPopUp = document.querySelector('.popUp__window');

      this.attachEvents();
    }

    return undefined;
  };

  this.openForm = function () {
    removeClass('hidden', this.element);
    removeClass('hidden', this.windowPopUp);
    this.windowPopUp.appendChild(this.element);
  };

  this.closeForm = function () {
    addClass('hidden', this.element);
    addClass('hidden', this.windowPopUp);
    this.windowPopUp.removeChild(this.element);
  };

  this.showTextForRegistration = function () {
    this.textForRegistration.classList.toggle('hidden');
    this.formHeader.innerHTML = 'Регистрация';
    this.buttonSignIn.innerHTML = 'Вход';
  };

  this.hideTextForRegistration = function () {
    this.formHeader.innerHTML = 'Вход';
    this.buttonSignIn.innerHTML = 'Регистрация';
    this.textForRegistration.classList.toggle('hidden');
  };

  this.changeNameAndShowOrHideText = function () {
    //debugger
    if (this.formHeader.innerHTML === 'Вход') {
      this.showTextForRegistration();
    } else {
      this.hideTextForRegistration();
    }
  };

  this.changeShowPassword = function () {
    //debugger
      if (this.inputFormPassword.type === 'password') {
        this.buttonShowPassword.classList.remove('form__showPassword_green');
        this.buttonShowPassword.classList.add('form__showPassword_red');
        this.inputFormPassword.type = 'text';
      } else {
        this.inputFormPassword.type = 'password';
        this.buttonShowPassword.classList.remove('form__showPassword_red');
        this.buttonShowPassword.classList.add('form__showPassword_green');
      }
  };

  this.attachEvents = function () {
    this.closeButton.addEventListener('click', this.closeForm.bind(this));
    this.openButton.addEventListener('click', this.openForm.bind(this));
    this.buttonSignIn.addEventListener('click', this.changeNameAndShowOrHideText.bind(this));
    this.buttonShowPassword.addEventListener('click', this.changeShowPassword.bind(this));
  };

  return this.init();
};

// var Dots = function (elements, mainDot) {
var Dots = function (config, context, sliders) {
  this.init = function () {
    if (config && context) {
      //debugger;
      this.config = config;
      this.context = context;

      this.createElements();
      this.render();
      this.setActiveDotAndSlide(0);
      this.animationSlides(0);
      return api;
    }

    return undefined;
  };

  this.createElements = function () {
    this.element = this.createContainer();
    this.dots = [];
    // this.container = context;
    var items = this.context.querySelectorAll(this.config.itemSelector);
    for(var i = 0; i < items.length; i++) {
      var dot = document.createElement('div');
      dot.className = this.config.itemClassName;
      dot.style.left = (i + 1) * 30 + 'px';
      this.dots.push(dot);
    }
  };

  this.createContainer = function () {
    var container = document.createElement('div');
    container.className = this.config.className;
    return this.context.appendChild(container);
  };

  this.render = function () {
    for (var i = 0; i < this.dots.length; i++) {
      this.element.appendChild(this.dots[i]);
    }
  };

  this.handleClick = function (e) {
    var target = e.target;

    for (var i = 0; i < this.dots.length; i++) {
      if (target === this.dots[i]) {
        this.setActiveDotAndSlide(i);
      }
    }
  };

  this.setActiveDotAndSlide = function (i) {
    this.deactivateAll();
    this.activate(i);
  };

  this.animationSlides = function (i) {
    setInterval(() => {
      this.setActiveDotAndSlide(i);
      i++;
        if (i == this.dots.length) {
          i = 0;
        }
    }, 3000);
  }

  this.deactivateAll = function () {
    for (var i = 0; i < this.dots.length; i++) {
      removeClass('dot_active', this.dots[i]);
      removeClass('slider__item_active', sliders[i])
    }
  };

  this.activate = function (i) {
    if (this.dots[i]) {
      addClass('dot_active', this.dots[i]);
      addClass('slider__item_active', sliders[i]);
    }
  };

  var api = {
    handleClick: this.handleClick.bind(this)
  };

  return this.init();
};

var Slider = function (config) {
    var defaultConfig = {
      dots: {
        className: 'dots',
        itemSelector: '.slider__item',
        itemClassName: 'dot'
      }
    };

    this.init = function () {
      if (config && config.id) {
        this.config = deepExtend(defaultConfig, config);
          this.element = document.querySelector('.' + this.config.id);
          this.sliderItems = this.element.querySelectorAll(defaultConfig.dots.itemSelector);
          this.dots = new Dots(this.config.dots, this.element, this.sliderItems);
          // this.slides = new Slide(this.config.dots, this.element);

          this.element.addEventListener('click', this.handleClick.bind(this))
      }

      return undefined;
    };

    this.handleClick = function (e) {
      if (e.target.className.indexOf('dot') >= 0) {
        this.dots.handleClick(e);
        // this.slides.handleClick(e);
      }
    };

    return this.init();
};

