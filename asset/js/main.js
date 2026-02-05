$(function () {
    gsap.registerPlugin(ScrollTrigger);

    /* 01. 헤더 색상 반전 (다크 모드 전환)*/
    // 첫 번째 구간 (섹션 03 ~ 06)
    ScrollTrigger.create({
        trigger: "#section03",
        start: "0% 10%",
        endTrigger: "#section06",
        end: "0% 50%",
        toggleClass: {
            targets: "header, .header-logo, .path",
            className: "dark",
        },
    });

    // 두 번째 구간 (섹션 12 ~ 마지막)
    ScrollTrigger.create({
        trigger: "#section12",
        start: "0% 10%",
        endTrigger: "#endDark2",
        end: "0% 0%",
        toggleClass: {
            targets: "header, .header-logo, .path",
            className: "dark",
        },
    });


    /* 02. 인트로 영역 애니메이션 (섹션 01) */
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

    intro.to("video", { filter: "brightness(0.3)" }, 0); // 비디오 어둡게
    intro.to(".step01", { opacity: 1 }, 0); // 텍스트 Step 01 등장
    intro.to(".step01", {
        opacity: 0,
        onStart() { $("header").addClass("active"); },
        onReverseComplete() { $("header").removeClass("active"); },
    });
    intro.to(".step02", { opacity: 1 }); // 텍스트 Step 02
    intro.to(".step02", { opacity: 0 });
    intro.to(".step03", { opacity: 1 }); // 텍스트 Step 03
    intro.to(".step03", { opacity: 0 });
    intro.to(".step04", { opacity: 1 }); // 텍스트 Step 04


    /* 03. 포토 슬라이더 애니메이션 (섹션 02) */
    const sect02 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section02",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
        },
    });

    sect02.to("#section02 .img-wrap img", { filter: "brightness(0.5)" }, 0); // 이미지 어둡게
    sect02.to("#section02 .text-wrap01", { opacity: 1 }, 0); // 텍스트 등장
    sect02.to("#section02 .img-wrap img", { filter: "brightness(1)" }, 1); // 다시 밝게
    sect02.to("#section02 .text-wrap01 .t01", { xPercent: 100 }, 1); // 좌우 텍스트 벌어짐
    sect02.to("#section02 .text-wrap01 .t03", { xPercent: -100 }, 1);
    sect02.to("#section02 .text-wrap01", { opacity: 0 }, 1.5); // 텍스트 퇴장

    // 이미지 순차적으로 위로 걷힘 (Clip-Path)
    sect02.to("#section02 .img-wrap .img:nth-child(3)", { clipPath: "inset(0 0 100% 0)", ease: "none" }, 2);
    sect02.to("#section02 .img-wrap .img:nth-child(2)", { clipPath: "inset(0 0 100% 0)", ease: "none" }, 2.5);
    sect02.to("#section02 .img-wrap img", { filter: "brightness(0.5)" }, 3);
    sect02.to("#section02 .text-wrap02", { opacity: 1 }, 3);


    /* 04. 인트로덕션 영역 (섹션 04) */
    const sect04 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section04",
            start: "0% 60%",
            end: "100% 100%",
            scrub: true,
        },
    });

    sect04.to(".introduction-area .before", { width: "30%" }, 0);
    sect04.to(".introduction-area .title-01", { xPercent: -170 }, 0);
    sect04.to(".introduction-area .after", { width: "30%" }, 0);
    sect04.to(".introduction-area .title-03", { xPercent: 130 }, 0);


    /* 05. 가로 슬라이드 및 바디 다크모드 (섹션 06) */
    ScrollTrigger.create({
        trigger: "#section06",
        start: "0% 50%",
        endTrigger: "#section12",
        end: "0% 20%",
        toggleClass: { targets: "body", className: "dark" },
    });

    const sect06 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section06",
            start: "0% 0%",
            end: "100% 100%",
            scrub: true,
            invalidateOnRefresh: true,
        },
    });

    sect06.to(".identity-slide-cont", {
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
    slogan.to(".banner-slogan .slogan-text", { opacity: 1 }, 1);
    slogan.to(".banner-slogan .blur-bg", { opacity: 1 }, 1);


    /* 07. 카드 겹치기 및 자물쇠 애니메이션 (섹션 09) */
    const sect09 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section09",
            start: "0% 0%",
            end: "100% 150%",
            scrub: true,
            invalidateOnRefresh: true,
        },
    });

    sect09.to("#section09 .slide-cont", .5, {
        x: () => $("#section09 .slide-head").outerWidth() * -1,
    });

    // 카드 순차적 겹침
    sect09.to("#section09 .slide-item:nth-of-type(2)", 1, { xPercent: -100, x: -40 }, 'a');
    sect09.to("#section09 .slide-item:nth-of-type(3)", 1, { xPercent: -200, x: -80 }, 'a');
    sect09.to("#section09 .slide-item:nth-of-type(4)", 1, { xPercent: -300, x: -120 }, 'a');

    // 자물쇠 이미지 교체
    sect09.to("#section09 .default", 0.5, { opacity: 0 }, 'b-=1');
    sect09.to("#section09 .lock", 0.5, { opacity: 1 }, 'b-=0.5');
    sect09.to("#section09 .lock", { opacity: 0 });


    /* 08. 섹션 09 -> 10 전환 (카드 등장) */
    ScrollTrigger.create({
        trigger: "#section09",
        start: "bottom 150%",
        onEnter: () => {
            const tl = gsap.timeline();
            tl.set("#section09", { opacity: 0, pointerEvents: "none" });
            tl.set("#section10 .left", { opacity: 1, pointerEvents: "auto" });
            tl.set("#section10 .left .card-box", { opacity: 1 });
            tl.set("#section10 .data-id_card", { opacity: 1 }, "+=0.1");
        },
        onLeaveBack: () => {
            gsap.set("#section09", { opacity: 1, pointerEvents: "auto" });
            gsap.set("#section10 .left", { opacity: 0, pointerEvents: "none" });
            gsap.set("#section10 .left .card-box", { opacity: 0 });
            gsap.set("#section10 .data-id_card", { opacity: 0 });
        },
        invalidateOnRefresh: true
    });


    /* 09. 섹션 11 애니메이션 (카드 및 그라데이션) */
    const sect11 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section11",
            start: "0% 0%",
            end: "100% 100%",
            scrub: true,
            onEnter: () => {
                gsap.set("#section11 .type-item-active, #section11 .cont", { opacity: 1 });
                gsap.set("#section10", { opacity: 0, pointerEvents: "none" });
            },
            onLeaveBack: () => {
                gsap.set("#section11 .type-item-active, #section11 .cont", { opacity: 0 });
                gsap.set("#section10", { opacity: 1, pointerEvents: "auto" });
            }
        },
    });

    sect11.to("#section11 .slide-item:nth-of-type(2)", { xPercent: -100, x: -40 }, 'a+=0.1');
    sect11.to("#section11 .slide-item:nth-of-type(3)", { xPercent: -200, x: -80 }, 'a+=0.1');
    sect11.to("#section11 .slide-item:nth-of-type(4)", { xPercent: -300, x: -120 }, 'a+=0.1');
    sect11.to("#section11 .data-user__text", { xPercent: -300 }, 'a+=0.1');
    sect11.to("#section11 .data-user__text, #section11 .box-gradient", { opacity: 1, duration: 0.5 }, 'b');


    /* 10. 인트로덕션 영역 02 (섹션 13) */
    const sect13 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section13",
            start: "0% 60%",
            end: "100% 100%",
            scrub: true,
        },
    });
    sect13.to(".introduction-area02 .before", { width: "30%" }, 0);
    sect13.to(".introduction-area02 .title-01", { xPercent: -115 }, 0);
    sect13.to(".introduction-area02 .after", { width: "30%" }, 0);
    sect13.to(".introduction-area02 .title-03", { xPercent: 120 }, 0);


    /* 11. 파이낸셜 가로 슬라이드 (섹션 14) */
    const sect14 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section14",
            start: "0% 0%",
            end: "100% 100%",
            scrub: true,
            toggleClass: { targets: "#section14 .slide-down", className: "active" },
            onUpdate: (self) => {
                const slideDown = document.querySelector("#section14 .slide-down");
                if (self.progress > 0.5) slideDown.classList.add("future");
                else slideDown.classList.remove("future");
            },
            invalidateOnRefresh: true,
        },
    });

    sect14.to("#section14 .slide-cont", {
        x: () => {
            const contentWidth = $("#section14 .slide-cont").outerWidth();
            const viewportWidth = $(window).innerWidth();
            return (contentWidth - viewportWidth) * -1;
        },
    }, 0);


    /* 12. 크리에이터 ID 인트로 (섹션 15) */
    const sect15 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section15",
            start: "0% 0%",
            end: "100% 100%",
            scrub: true,
        },
    });
    sect15.to("#section15 .wrap, #section15 .arrow-down", { opacity: 1 }, 0);
    sect15.to("#section15 .wrap, #section15 .arrow-down", { opacity: 0 }, 1);


    /* 13. 가로 슬라이드 (섹션 16) */
    const sect16 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section16",
            start: "0% 0%",
            end: "100% 90%",
            scrub: true,
            onEnter: () => {
                document.querySelector("#section16 .slide-item:nth-child(1)").classList.add("is-active");
            },
            invalidateOnRefresh: true,
        },
    });

    sect16.to("#section16 .slide-cont", {
        x: () => {
            const contentWidth = $("#section16 .slide-cont").outerWidth();
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