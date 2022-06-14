import * as basicLightbox from "basiclightbox";

const ref = {
  cardContainer: document.querySelector(".films__container"),
};

ref.cardContainer.addEventListener("click", onClickCard);

function onClickCard(e) {
  e.preventDefault();

  if (e.target.nodeName !== "DIV") {
    console.dir(e.target);
    // if (e.target.nodeName === "IMG") {
    //   console.log(
    //     e.target.parentElement.parentElement.parentElement.dataset.id
    //   );
    // }
    const instance = basicLightbox.create(
      `
    <div class="modal__container">
      <div class="modal__close">
        <div class="modal__close-first"></div>
        <div class="modal__close-second"></div>
      </div>
      <div class="modal-wrap">
        <div class="modal__picture-wrap">
          <picture>
            <source
              srcset="images/modal/modal-plug-desk.jpg"
              media="(min-width: 1024px)"
            />
            <source
              srcset="images/modal/modal-plug-tab.jpg"
              media="(min-width: 768px)"
            />
            <source
              srcset="images/modal/modal-plug-mob.jpg"
              media="(min-width: 320px)"
            />
            <img
              class="modal__picture"
              src="./images/modal/modal-plug-mob.jpg"
              alt="film-picture"
            />
          </picture>
        </div>
        <div class="modal__desc-wrap">
          <h2 class="modal-heading">A FISTFUL OF LEAD</h2>
          <div class="modal__rating-wrap">
            <ul class="modal__rating-left-list">
              <li class="modal__rating-left-item">Vote / Votes</li>
              <li class="modal__rating-left-item">Popularity</li>
              <li class="modal__rating-left-item">Original Title</li>
              <li class="modal__rating-left-item">Genre</li>
            </ul>
            <ul class="modal__rating-right-list">
              <li class="modal__rating-right-item">
                <span class="modal__rating-right-item--color">7.3</span> /
                <span class="modal__rating-right-item--shadow">1260</span>
              </li>
              <li class="modal__rating-right-item">100.2</li>
              <li class="modal__rating-right-item">A FISTFUL OF LEAD</li>
              <li class="modal__rating-right-item">Western</li>
            </ul>
          </div>
          <div class="modal__content-wrap">
            <h4 class="modal__content-heading">About</h4>
            <p class="modal__content">
              Four of the West’s most infamous outlaws assemble to steal a huge
              stash of gold from the most corrupt settlement of the gold rush
              towns. But not all goes to plan one is killed and the other three
              escapes with bags of gold hide out in the abandoned gold mine where
              they happen across another gang of three – who themselves were
              planning to hit the very same bank! As tensions rise, things go from
              bad to worse as they realise the bags of gold are filled with
              lead... they’ve been double crossed – but by who and how?
            </p>
          </div>
          <div class="modal__button-wrap">
            <button class="modal__button">add to Watched</button>
            <button class="modal__button modal__button--transparent">
              add to queue
            </button>
          </div>
        </div>
      </div>
    </div>
  
  `,
      {
        onShow: instance => {
          instance.element().querySelector(".modal__close").onclick =
            instance.close;
        },
      }
    );
    instance.show();
  }
}