
const SubNavAnimation = (navTitle)=>{
    $(`#li${navTitle}`).mouseenter(()=>{
        $(`#${navTitle}`).parent().addClass("preSelected")
        $(`#${navTitle}Nav`).css("display","flex").hide().slideDown(220)
    }).mouseleave(()=>{
        $(`#${navTitle}`).parent().removeClass("preSelected")
        $(`#${navTitle}Nav`).css("display","none")
    })
}

SubNavAnimation("Corporate");
SubNavAnimation("Operations");
SubNavAnimation("Exploration");
SubNavAnimation("Shareholders");
SubNavAnimation("Careers");
