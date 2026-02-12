$(function () {

    gsap.registerPlugin(ScrollTrigger);

    /* 01. 헤더 색상 반전 (다크 모드 전환)*/
    // 첫 번째 구간
    ScrollTrigger.create({
        trigger: ".sc-talent",
        start: "0% 10%",
        endTrigger: "#section04",
        end: "0% 50%",
        toggleClass: {
            targets: "header, .header-logo, .path",
            className: "dark",
        },
    });

    // 두 번째 구간
    ScrollTrigger.create({
        trigger: "#darkTrigger",
        start: "0% 10%",
        endTrigger: "#endDark2",
        end: "0% 0%",
        toggleClass: {
            targets: "header, .header-logo, .path",
            className: "dark",
        },
    });


    /* 02. 인트로 영역 애니메이션 */
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

    intro.to("video", { filter: "brightness(0.3)" }, 0);
    // 비디오 어둡게
    intro.to(".step01", { opacity: 1 }, 0);
    // 텍스트 Step 01 등장
    intro.to(".step01", {
        opacity: 0,
        onStart() { $("header").addClass("active"); },
        onReverseComplete() { $("header").removeClass("active"); },
    });
    intro.to(".step02", { opacity: 1 });
    // 텍스트 Step 02
    intro.to(".step02", { opacity: 0 });
    intro.to(".step03", { opacity: 1 });
    // 텍스트 Step 03
    intro.to(".step03", { opacity: 0 });
    intro.to(".step04", { opacity: 1 });
    // 텍스트 Step 04


    /* 03. 포토 슬라이더 애니메이션 */
    const sect02 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section02",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
        },
    });

    sect02.to("#section02 .img-wrap img", { filter: "brightness(0.5)" }, 0);
    // 이미지 어둡게
    sect02.to("#section02 .text-wrap01", { opacity: 1 }, 0);
    // 텍스트 등장
    sect02.to("#section02 .img-wrap img", { filter: "brightness(1)" }, 1);
    // 다시 밝게
    sect02.to("#section02 .text-wrap01 .t01", { xPercent: 100 }, 1);
    // 좌우 텍스트 벌어짐
    sect02.to("#section02 .text-wrap01 .t03", { xPercent: -100 }, 1);
    sect02.to("#section02 .text-wrap01", { opacity: 0 }, 1.5);
    // 텍스트 퇴장

    // 이미지 순차적으로 위로 걷힘 (Clip-Path)
    sect02.to("#section02 .img-wrap .img:nth-child(3)", { clipPath: "inset(0 0 100% 0)", ease: "none" }, 2);
    sect02.to("#section02 .img-wrap .img:nth-child(2)", { clipPath: "inset(0 0 100% 0)", ease: "none" }, 2.5);
    sect02.to("#section02 .img-wrap img", { filter: "brightness(0.5)" }, 3);
    sect02.to("#section02 .text-wrap02", { opacity: 1 }, 3);


    /* 04. visual */
    const tlVisual = gsap.timeline({
        scrollTrigger: {
            trigger: ".sc-talent .visual",
            start: "0% 60%",
            end: "100% 100%",
            scrub: true,
        },
    });

    tlVisual.to(".sc-talent .visual .before", { width: "30%" }, 0);
    tlVisual.to(".sc-talent .visual .caption01", { xPercent: -170 }, 0);
    tlVisual.to(".sc-talent .visual .after", { width: "30%" }, 0);
    tlVisual.to(".sc-talent .visual .caption03", { xPercent: 130 }, 0);


    /* 05. 가로 슬라이드 및 바디 다크모드 */
    ScrollTrigger.create({
        trigger: "#section04",
        start: "0% 50%",
        endTrigger: "#darkTrigger",
        end: "0% 20%",
        toggleClass: { targets: "body", className: "dark" },
    });

    const sect04 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section04",
            start: "0% 0%",
            end: "100% 100%",
            scrub: true,
            invalidateOnRefresh: true,
        },
    });

    sect04.to(".identity-slide-cont", {
        x: () => {
            const slideContent = document.querySelector(".identity-slide-cont");
            return -(slideContent.offsetWidth - window.innerWidth);
        },
        ease: "none",
    });


    /* 06. 배너 슬로건 (컬러 박스 애니메이션) */
    const slogan = gsap.timeline({
        scrollTrigger: {
            trigger: ".banner-slogan",
            start: "0% 90%",
            end: "100% 50%",
            scrub: true,
        },
    });
    slogan.from(".banner-slogan .pink, .banner-slogan .blue", { x: -300 }, 0);
    slogan.from(".banner-slogan .green", { x: 300 }, 0);
    slogan.to(".slogan-title", { opacity: 1 }, 1);
    slogan.to(".blur-overlay", { opacity: 1 }, 1);


    /* 07. 카드 겹치기 및 자물쇠 애니메이션 (hybrid-step-01) */
    const step01 = gsap.timeline({
        scrollTrigger: {
            trigger: "#hybrid-step-01",
            start: "0% 0%",
            end: "100% 150%",
            scrub: true,
            invalidateOnRefresh: true,
        },
    });

    step01.to("#hybrid-step-01 .slide-cont", .5, {
        x: () => $("#hybrid-step-01 .slide-head").outerWidth() * -1,
    });

    // 카드 순차적 겹침
    step01.to("#hybrid-step-01 .slide-item:nth-of-type(2)", 1, { xPercent: -100, x: -40 }, 'a');
    step01.to("#hybrid-step-01 .slide-item:nth-of-type(3)", 1, { xPercent: -200, x: -80 }, 'a');
    step01.to("#hybrid-step-01 .slide-item:nth-of-type(4)", 1, { xPercent: -300, x: -120 }, 'a');

    // 자물쇠 이미지 교체
    step01.to("#hybrid-step-01 .default", 0.5, { opacity: 0 }, 'b-=1');
    step01.to("#hybrid-step-01 .lock", 0.5, { opacity: 1 }, 'b-=0.5');
    step01.to("#hybrid-step-01 .lock", { opacity: 0 });


    /* 08. hybrid-step-01 -> 02 (카드 등장) */
    ScrollTrigger.create({
        trigger: "#hybrid-step-01",
        start: "bottom 120%",
        onEnter: () => {
            const tl = gsap.timeline();
            tl.set("#hybrid-step-01", {
                opacity: 0,
                pointerEvents: "none"
            });
            tl.set("#hybrid-step-02 .left", {
                opacity: 1,
                pointerEvents: "auto"
            });
            tl.set("#hybrid-step-02 .left .card-box", {
                opacity: 1
            });
            tl.fromTo("#hybrid-step-02 .data-id_card",
                { opacity: 0 },
                {
                    opacity: 1,
                    ease: "power2.out"
                },
                "+=0.1"
            );
        },
        onLeaveBack: () => {
            gsap.set("#hybrid-step-01", { opacity: 1, pointerEvents: "auto" });
            gsap.set("#hybrid-step-02 .left", { opacity: 0, pointerEvents: "none" });
            gsap.set("#hybrid-step-02 .left .card-box", { opacity: 0 });

        },
        invalidateOnRefresh: true
    });


    /* 09. hybrid-step-03 (카드 및 그라데이션) */
    ScrollTrigger.create({
        trigger: "#hybrid-step-03",
        start: "top top",
        invalidateOnRefresh: true,
        onEnter: () => {
            gsap.set("#hybrid-step-02", { opacity: 0, pointerEvents: "none" });
            gsap.set("#hybrid-step-03 .type-item-active, #hybrid-step-03 .cont", { opacity: 1 });
        },
        onLeaveBack: () => {
            gsap.set("#hybrid-step-03 .type-item-active, #hybrid-step-03 .cont", { opacity: 0 });
            gsap.set("#hybrid-step-02", { opacity: 1, pointerEvents: "auto" });
        },
        invalidateOnRefresh: true
    });

    const step03 = gsap.timeline({
        scrollTrigger: {
            trigger: "#hybrid-step-03",
            start: "top top",
            end: "+=3000",
            scrub: true
        }
    });

    step03.to("#hybrid-step-03 .slide-item:nth-of-type(2)",
        { xPercent: -100, x: -40 },
        'a+=0.1'
    );

    step03.to("#hybrid-step-03 .slide-item:nth-of-type(3)",
        { xPercent: -200, x: -80 },
        'a+=0.1'
    );

    step03.to("#hybrid-step-03 .slide-item:nth-of-type(4)",
        { xPercent: -300, x: -120 },
        'a+=0.1'
    );

    step03.to("#hybrid-step-03 .data-user__text",
        { xPercent: -300 },
        'a+=0.1'
    );

    step03.to("#hybrid-step-03 .data-user__text, #hybrid-step-03 .box-gradient",
        { opacity: 1 },
        'b'
    );


    /* 10. 에셋 visual */
    const acVisual = gsap.timeline({
        scrollTrigger: {
            trigger: ".sc-asset .visual",
            start: "0% 60%",
            end: "100% 100%",
            scrub: true,
        },
    });
    acVisual.to(".sc-asset .visual .before", { width: "30%" }, 0);
    acVisual.to(".sc-asset .visual .caption01", { xPercent: -115 }, 0);
    acVisual.to(".sc-asset .visual .after", { width: "30%" }, 0);
    acVisual.to(".sc-asset .visual .caption03", { xPercent: 120 }, 0);


    /* 11. 파이낸셜 가로 슬라이드 */
    const finance = gsap.timeline({
        scrollTrigger: {
            trigger: "#finance-slide",
            start: "0% 0%",
            end: "+=200%",
            scrub: true,
            toggleClass: { targets: "#finance-slide .slide-down", className: "active" },
            onUpdate: (self) => {
                const slideDown = document.querySelector("#finance-slide .slide-down");
                if (self.progress > 0.5) slideDown.classList.add("future");
                else slideDown.classList.remove("future");
            },
            invalidateOnRefresh: true,
        },
    });

    finance.to("#finance-slide .slide-cont", {
        x: () => {
            const contentWidth = $("#finance-slide .slide-cont").outerWidth();
            const viewportWidth = $(window).innerWidth();
            return (contentWidth - viewportWidth) * -1;
        },
    }, 0);


    /* 12. 앰배서더 ID 인트로 */
    const ambassador = gsap.timeline({
        scrollTrigger: {
            trigger: ".ambassador-intro",
            start: "0% 0%",
            end: "100% 100%",
            scrub: true,
        },
    });
    ambassador.to(".ambassador-intro .creator-txt, .ambassador-intro .arrow-down", { opacity: 1 }, 0);
    ambassador.to(".ambassador-intro .creator-txt, .ambassador-intro .arrow-down", { opacity: 0 }, 1);


    /* 13. 가로 슬라이드  */
    const ambSlide = gsap.timeline({
        scrollTrigger: {
            trigger: "#ambassador-slide",
            start: "0% 0%",
            end: "100% 90%",
            scrub: true,
            onEnter: () => {
                document.querySelector("#ambassador-slide .slide-item:nth-child(1)").classList.add("is-active");
            },
            invalidateOnRefresh: true,
        },
    });

    ambSlide.to("#ambassador-slide .slide-cont", {
        x: () => {
            const contentWidth = $("#ambassador-slide .slide-cont").outerWidth();
            const viewportWidth = $(window).innerWidth();
            return (contentWidth - viewportWidth) * -1;
        },
    }, 0);


    /* 14. 상단 이동 버튼 (Scroll To Top) */
    var btn = $(".scroll-top-btn");
    var startBtn = $("#section02");
    var footer = $("footer");
    var lastScrollTop = 0;
    var STOP_GAP = 250;

    $(window).on("scroll", function () {
        var scrollTop = $(window).scrollTop();
        var winH = $(window).height();
        var sectionTop = startBtn.offset().top;
        var footerTop = footer.offset().top;
        var footerH = footer.outerHeight();
        var footerEnd = footerTop + footerH;
        var btnH = btn.outerHeight();
        var isFooterEnd = scrollTop + winH >= footerEnd;

        // 노출 및 숨김 로직 (업/다운 스크롤 감지)
        if (scrollTop >= sectionTop) {
            if (isFooterEnd) btn.addClass("show");
            else {
                if (scrollTop > lastScrollTop) btn.removeClass("show");
                else btn.addClass("show");
            }
        } else {
            btn.removeClass("show");
        }

        // 푸터 부근에서 포지션 변경 (멈춤 로직)
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

    btn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 300);
    });


    /* 15. 푸터 배너 등장 */
    const banner = gsap.timeline({
        scrollTrigger: {
            trigger: "#endDark2",
            start: "0% 90%",
            end: "100% 100%",
            scrub: true,
        },
    });
    banner.to(".banner", { y: 0 });
});