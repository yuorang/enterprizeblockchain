$(function () {
    // * header 색상반전
    // 첫번째 구간
    ScrollTrigger.create({
        trigger: "#section03",
        start: "0% 10%",
        endTrigger: "#section06",
        end: "0% 50%",
        // markers: true,
        toggleClass: {
            targets: "header, .header-logo, .path",
            className: "dark",
        },
    });
    // 두번째 구간
    ScrollTrigger.create({
        trigger: "#section12",
        start: "0% 10%",
        endTrigger: "#endDark2",
        end: "0% 0%",
        // markers: true,
        toggleClass: {
            targets: "header, .header-logo, .path",
            className: "dark",
        },
    });

    // * intro 영역
    const intro = gsap.timeline({
        scrollTrigger: {
            trigger: "#section01",
            start: "0% 0%",
            end: "100% 100%",
            scrub: 0,
            onLeave() {
                $(".scroll-down-arrow").addClass("hide-on-finish");
            },
            onEnterBack() {
                $(".scroll-down-arrow").removeClass("hide-on-finish");
            },
        },
    });
    // video 어둡게
    intro.to("video", { filter: "brightness(0.3)" }, 0);
    // Step 01 text
    intro.to(".step01", { opacity: 1 }, 0);
    intro.to(".step01", {
        opacity: 0,
        onStart() {
            $("header").addClass("active");
        },
        onReverseComplete() {
            $("header").removeClass("active");
        },
    });

    // Step 02 text
    intro.to(".step02", { opacity: 1 });
    intro.to(".step02", { opacity: 0 });

    // Step 03 text
    intro.to(".step03", { opacity: 1 });
    intro.to(".step03", { opacity: 0 });

    // Step 04 text
    intro.to(".step04", { opacity: 1 });

    // * photo-slider
    gsap.registerPlugin(ScrollTrigger);

    const sect02 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section02",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
        },
    });

    // 1. 이미지 어두워지며 텍스트 등장
    sect02.to("#section02 .img-wrap img", {
        filter: "brightness(0.5)",
    }, 0);

    sect02.to("#section02 .text-wrap01", {
        opacity: 1,
    }, 0);

    // 2. 이미지 밝아지며 텍스트 이동
    sect02.to("#section02 .img-wrap img", {
        filter: "brightness(1)",
    }, 1);

    sect02.to("#section02 .text-wrap01 .t01", {
        xPercent: 100,
    }, 1);

    sect02.to("#section02 .text-wrap01 .t03", {
        xPercent: -100,
    }, 1);

    // 3. 텍스트 사라짐
    sect02.to("#section02 .text-wrap01", {
        opacity: 0,
    }, 1.5);

    // 4. 이미지 걷힘 (아래 → 위)
    sect02.to("#section02 .img-wrap .img:nth-child(3)", {
        clipPath: "inset(0 0 100% 0)",
        ease: "none",
    }, 2);

    sect02.to("#section02 .img-wrap .img:nth-child(2)", {
        clipPath: "inset(0 0 100% 0)",
        ease: "none",
    }, 2.5);

    // 5. 마지막 이미지 어두워지며 텍스트 등장
    sect02.to("#section02 .img-wrap img", {
        filter: "brightness(0.5)",
    }, 3);

    sect02.to("#section02 .text-wrap02", {
        opacity: 1,
    }, 3);

    // * introduction-area
    const sect04 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section04",
            start: "0% 60%",
            end: "100% 100%",
            scrub: true,
        },
    });
    // 이미지 before,after 밀리고 글자 이동
    sect04.to(".introduction-area .before", { width: "30%" }, 0);
    sect04.to(".introduction-area .title-01", { xPercent: -170 }, 0);
    sect04.to(".introduction-area .after", { width: "30%" }, 0);
    sect04.to(".introduction-area .title-03", { xPercent: 130 }, 0);

    // *slide data-workflow
    // #startDark부터 #endDark 구간까지 body 검정색
    ScrollTrigger.create({
        trigger: "#section06",
        start: "0% 50%",
        endTrigger: "#section12",
        end: "0% 20%",
        // markers: true,
        toggleClass: {
            targets: "body",
            className: "dark",
        },
    });

    const sect06 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section06",
            start: "0% 0%",
            end: "100% 100%",
            scrub: true,
            // markers: true,
            invaildateOnRefresh: true,
        },
    });
    sect06.to(".identity-slide-cont", {
        xPercent: -100,
        x: () => window.innerWidth,
    });

    //  *banner-slogan
    const slogan = gsap.timeline({
        scrollTrigger: {
            trigger: ".banner-slogan",
            start: "0% 90%",
            end: "100% 50%",
            scrub: true,
            // markers: true,
        },
    });
    slogan.from(".banner-slogan .pink, .banner-slogan .blue", { x: -300 }, 0);
    slogan.from(".banner-slogan .green", { x: 300 }, 0);
    slogan.to(".banner-slogan .slogan-text", { opacity: 1 }, 1);
    slogan.to(".banner-slogan .blur-bg", { opacity: 1 }, 1);

    // *section09
    const sect09 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section09",
            start: "0% 0%",
            end: "100% 150%",
            scrub: true,
            // markers: true,
            invaildateOnRefresh: true,
        },
    });
    // 오른쪽으로 이동
    sect09.to("#section09 .slide-cont", .5, {
        x: function () {
            return $("#section09 .slide-head").outerWidth() * -1;
        },
    });

    // 카드겹치기
    sect09.to(
        "#section09 .slide-item:nth-of-type(2) ", 1, {
        xPercent: -100,
        x: -40,
    },
        'a'
    );
    sect09.to(
        "#section09 .slide-item:nth-of-type(3) ", 1,
        {
            xPercent: -100 * 2,
            x: -40 * 2,
        },
        'a'
    );
    sect09.to(
        "#section09 .slide-item:nth-of-type(4) ", 1,
        {
            xPercent: -100 * 3,
            x: -40 * 3,
        },
        'a'
    );

    // 자물쇠 이미지 교체되기
    sect09.to(
        "#section09 .default ", 0.5,
        {
            opacity: 0,
        },
        'b-=1'
    );
    sect09.to("#section09 .lock ", 0.5, {
        opacity: 1,
    }, 'b-=0.5');

    // 락 이미지 없어지기
    sect09.to("#section09 .lock ", {
        opacity: 0,
    });


    // *section10

    // section10 left카드랑 겹쳐질때 사라지기

    ScrollTrigger.create({
        trigger: "#section09",
        start: "bottom 150%",

        onEnter: () => {
            const tl = gsap.timeline();

            // section09 즉시 숨김
            tl.set("#section09", {
                opacity: 0,
                pointerEvents: "none"
            });

            // 카드 박스 등장
            tl.set("#section10 .left", {
                opacity: 1,
                pointerEvents: "auto"
            });
            tl.set("#section10 .left .card-box", {
                opacity: 1
            });

            // 뒤에 텍스트 등장
            tl.set(
                "#section10 .data-id_card",
                { opacity: 1 },
                "+=0.1"
            );
        },

        onLeaveBack: () => {
            gsap.set("#section09", {
                opacity: 1,
                pointerEvents: "auto"
            });

            gsap.set("#section10 .left", {
                opacity: 0,
                pointerEvents: "none"
            });

            gsap.set("#section10 .left .card-box", {
                opacity: 0
            });

            gsap.set("#section10 .data-id_card", {
                opacity: 0
            });
        },

        invalidateOnRefresh: true
    });


    // *section11
    const sect11 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section11",
            start: "0% 0%",
            end: "100% 100%",
            scrub: true,
            // markers: true,

            onEnter: () => {
                // 활성 아이템 즉시 등장
                gsap.set("#section11 .type-item-active", {
                    opacity: 1
                });

                // 컨텐츠 즉시 표시
                gsap.set("#section11 .cont", {
                    opacity: 1
                });

                // section10 제거
                gsap.set("#section10", {
                    opacity: 0,
                    pointerEvents: "none"
                });
            },

            onLeaveBack: () => {
                // 위로 다시 올라갈 때 원상복구 (선택)
                gsap.set("#section11 .type-item-active", {
                    opacity: 0
                });

                gsap.set("#section11 .cont", {
                    opacity: 0
                }); gsap.set("#section10", {
                    opacity: 1,
                    pointerEvents: "auto"
                });
            }
        },
    });

    sect11.to(
        "#section11 .slide-item:nth-of-type(2)",
        {
            xPercent: -100,
            x: -40,
        },
        'a+=0.1'
    );
    sect11.to(
        "#section11 .slide-item:nth-of-type(3)",
        {
            xPercent: -100 * 2,
            x: -40 * 2,
        },
        'a+=0.1'
    );
    sect11.to(
        "#section11 .slide-item:nth-of-type(4)",
        {
            xPercent: -100 * 3,
            x: -40 * 3,
        },
        'a+=0.1'
    );
    sect11.to(
        // 텍스트 밝아지기
        "#section11 .data-user__text",
        {
            xPercent: -100 * 3,
        },
        'a+=0.1'
    );
    sect11.to(
        "#section11 .data-user__text",
        {
            opacity: 1,
            duration: 0.5,
        },
        'b'
    );
    sect11.to(
        "#section11 .box-gradient",
        {
            opacity: 1,
            duration: 0.5,
        },
        'b'
    );

    // * introduction-area02
    const sect13 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section13",
            start: "0% 60%",
            end: "100% 100%",
            scrub: true,
        },
    });
    // 이미지 before,after 밀리고 글자 이동
    sect13.to(".introduction-area02 .before", { width: "30%" }, 0);
    sect13.to(".introduction-area02 .title-01", { xPercent: -115 }, 0);
    sect13.to(".introduction-area02 .after", { width: "30%" }, 0);
    sect13.to(".introduction-area02 .title-03", { xPercent: 120 }, 0);

    // * section14
    const sect14 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section14",
            start: "0% 0%",
            end: "100% 100%",
            scrub: true,
            // markers: true,
            toggleClass: {
                targets: "#section14 .slide-down",
                className: "active",
            },
            onUpdate: (self) => {
                const slideDown = document.querySelector("#section14 .slide-down");

                if (self.progress > 0.5) {
                    slideDown.classList.add("future");
                } else {
                    slideDown.classList.remove("future");
                }
            },
            invalidateOnRefresh: true,
        },
    });
    sect14.to(
        "#section14 .slide-cont",
        {
            x: function () {
                // slide-cont의 총 너비
                const contentWidth = $("#section14 .slide-cont").outerWidth();
                // 뷰포트 너비 (컨테이너가 멈춰야 할 위치)
                const viewportWidth = $(window).innerWidth();
                // 이동 거리 = (총 너비 - 뷰포트 너비) * -1
                return (contentWidth - viewportWidth) * -1;
            },
        },
        0
    );

    // * introduction-area02
    const sect15 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section15",
            start: "0% 0%",
            end: "100% 100%",
            scrub: true,
        },
    });
    sect15.to("#section15 .wrap", { opacity: 1 }, 0);
    sect15.to("#section15 .arrow-down", { opacity: 1 }, 0);
    sect15.to("#section15 .wrap", { opacity: 0 }, 1);
    sect15.to("#section15 .arrow-down", { opacity: 0 }, 1);

    // * section16
    const sect16 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section16",
            start: "0% 0%",
            end: "100% 90%",
            scrub: true,
            // markers: true,
            onEnter: () => {
                document
                    .querySelector("#section16 .slide-item:nth-child(1)")
                    .classList.add("is-active");
            },
            invalidateOnRefresh: true,
        },
    });
    sect16.to(
        "#section16 .slide-cont",
        {
            /* <-- slide-sticky가 아닌 slide-cont를 움직여야 함 */
            x: function () {
                // slide-cont의 총 너비
                const contentWidth = $("#section16 .slide-cont").outerWidth();
                // 뷰포트 너비 (컨테이너가 멈춰야 할 위치)
                const viewportWidth = $(window).innerWidth();
                // 이동 거리 = (총 너비 - 뷰포트 너비) * -1
                return (contentWidth - viewportWidth) * -1;
            },
        },
        0
    );

    // * #scroll-to-top
    var btn = $(".scroll-top-btn");
    var startBtn = $("#section02");
    var footer = $("footer");

    var lastScrollTop = 0;
    var STOP_GAP = 250; // footer 끝에서 위로 200px

    $(window).on("scroll", function () {
        var scrollTop = $(window).scrollTop();
        var winH = $(window).height();

        var sectionTop = startBtn.offset().top;

        var footerTop = footer.offset().top;
        var footerH = footer.outerHeight();
        var footerEnd = footerTop + footerH;

        var btnH = btn.outerHeight();

        var isFooterEnd = scrollTop + winH >= footerEnd;


        // show / hide 로직
        if (scrollTop >= sectionTop) {
            if (isFooterEnd) {
                // footer에서는 항상 보이게
                btn.addClass("show");
            } else {
                if (scrollTop > lastScrollTop) {
                    btn.removeClass("show");
                } else {
                    btn.addClass("show");
                }
            }
        } else {
            btn.removeClass("show");
        }

        // footer 끝 기준 200px 위에서 멈춤
        if (scrollTop + winH >= footerEnd - STOP_GAP) {
            btn.css({
                position: "absolute",
                top: footerEnd - STOP_GAP - btnH,
                bottom: "auto"
            });
        } else {
            btn.css({
                position: "fixed",
                top: "auto",
                bottom: "40px"
            });
        }

        lastScrollTop = scrollTop;
    });

    // 클릭 시 상단 이동
    btn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 300);
    });



    // * footer-banner
    const banner = gsap.timeline({
        scrollTrigger: {
            trigger: "#endDark2",
            start: "0% 90%",
            end: "100% 100%",
            scrub: true,
            // markers: true,
        },
    });
    banner.to(".banner", { y: 0 });
});
