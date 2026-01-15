/* --- 配置 --- */
const CONFIG = {
    themeKey: 'pixel_farm_theme',
    motionKey: 'pixel_farm_motion'
};

// ... (数据部分省略，请直接使用你之前的完整数据，这里只展示修改的逻辑部分) ...
const storyTimeline = [
    { date: "2022年3月末", img: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/first.png", question: "我们最开始是怎么认识的？你还差点让我错过什么？", hint: "关键词：共同好友 / 好友申请", answer: "我是从我们俩共同好友那里认识你的。刚认识的时候你甚至都没有通过我好友申请，让我一番好等，差点就错过你啦。" },
    { date: "2022年4月2号", img: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/Internet.jpeg", question: "我们是哪天、在什么情况下“误打误撞”地在一起的？", hint: "关键词：网吧 / 猪咪咪 / 高考压力", answer: "4月2号那天晚上，我和猪咪咪（姐姐）两口子去上网。那晚我们聊到了你以前遇到的人，也是在那个时候，在高考压力下我们就在一起啦，误打误撞又恰恰很对。", speaker: "猪唧唧" },
    { date: "2022年4月末", img: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/walk.jpeg", question: "我们第一次见面那晚，你是怎么“偷偷下楼”的？我们最后做了什么？", hint: "关键词：宵禁 / 买小零食当借口 / 月光 / 牵手半小时", answer: "那天是周五，四月末风微微凉，我穿着卫衣到你家楼下来找你。你因为宵禁只能和嘎嘎娃儿说下楼买小零食，还把陈露拉着一起打掩护。你画了美美的妆，月光洒在你脸上美得我愣神。我们没有拘谨，反而安心放松，牵着手在你家小区楼下逛了半个小时，那是最幸福的半小时。", speaker: "猪唧唧" },
    { date: "2022年6月 & 10月", img: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/gk.jpeg", question: "高考那会儿我们心态是怎样的？后来我们怎么维持见面频率的？", hint: "关键词：天意 / 重庆-绵阳 / 一月一面 / 3小时高铁", answer: "我们高考时都没有太紧张，觉得考得怎么样都是天意，直到成绩出来两个人才松口气。虽然不在一个城市，你在重庆我在绵阳，但我们还是保持一月一面持续了三年。你每次从重庆坐3个小时高铁过来，我都好担心你。国庆我第一次来重庆找你，天天粘在一起，10月份重庆巨热，我们还去做核酸。", speaker: "猪唧唧" },
    { date: "2024年1月", img: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/db.jpeg", question: "我们第一次出去玩去的哪里？进房间后为什么傻眼？回成都发生了什么惊险事？", hint: "关键词：东北/雪很厚/屋里太热/没去长白山/差点赶不上飞机", answer: "2024年1月，我们去东北。南方人的我们出发前太激动，到地方看到雪很厚开心死了，但进房间傻眼：太热了，脸红得像烧起来。我们去了长春伪满皇宫、冰雪大世界。最遗憾是我没提前买票没去成长白山。我们还去了延吉吃烧烤，坐绿皮火车去哈尔滨。回成都的时候还差点没坐上飞机，幸好飞机晚点，老天眷顾。", speaker: "猪唧唧" },
    { date: "2024年8月", img: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/lijiang.jpeg", question: "丽江那次爬玉龙雪山发生了什么？后来你怎么了，我又做了什么？", hint: "关键词：好酒店/前一晚喝酒/被宰600/连夜医院", answer: "2024年8月，我们去了丽江玩，住了一个很好的酒店。爬玉龙雪山时，因为我前一天晚上喝了酒，我们被“牦牛”宰了，装备花了600多。我还在排队时被乱挤气到怒吼。后来你感冒了，我心疼死，连夜带你去医院检查，还遇到蘑菇中毒的可怜人。", speaker: "猪唧唧" },
    { date: "2025年 - 未来", img: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/ky.jpeg", question: "2025年我们主要在干嘛？我最累的时候你做了什么把我吓到但也感动到？", hint: "关键词：自习室暑假/晒太阳/实习很累/重庆回来惊喜/2026新生活", answer: "2025年我们奋力准备考研，在自习室泡了一个暑假。你很焦虑，我总是偷懒拉你出去晒太阳、看电影。我还去实习，那段时间真的很累，你还专门从重庆回来给我惊喜陪我，真的把我吓死但也特别感动。考完之后一切都过去了，2026等着我们的是新的生活，我们可以一起继续走下去。", speaker: "猪唧唧" }
];

const galleryList = [
    // ... (请保持你之前的完整 galleryList 数据，这里省略) ...
    { type: "video", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/051541c450521edc692e52c9362dea3e.MP4", thumb: "IMG_1630.JPG", title: "💍 笨蛋求婚", caption: "笑场现场记录" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E7%94%9F%E6%97%A5%E5%BF%AB%E4%B9%90.jpg", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E7%94%9F%E6%97%A5%E5%BF%AB%E4%B9%90.jpg", title: "🎂 生日快乐" },
     { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E8%BF%90%E5%8A%A8%E5%85%AC%E5%9B%AD.jpg", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E8%BF%90%E5%8A%A8%E5%85%AC%E5%9B%AD.jpg", title: "⛲️ 体育公园" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E6%89%93%E7%9E%8C%E7%9D%A1.jpg", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E6%89%93%E7%9E%8C%E7%9D%A1.jpg", title: "🤠 怒骂玉龙雪山" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E7%B4%A2%E8%8F%B2%E4%BA%9A%E5%A4%A7%E6%95%99%E5%A0%82.jpg", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E7%B4%A2%E8%8F%B2%E4%BA%9A%E5%A4%A7%E6%95%99%E5%A0%82.jpg", title: "🏰 索菲亚之夜" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E5%BB%B6%E5%90%89.jpg", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E5%BB%B6%E5%90%89.jpg", title: "🏢 延吉网红墙" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E5%90%83%E9%9D%A2%E5%8C%85.jpg", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E5%90%83%E9%9D%A2%E5%8C%85.jpg", title: "🍔 吃货二人组" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/qs.JPG", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/qs.JPG", title: "💌 baby给我写的小情书" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/mosi.JPG", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/mosi.JPG", title: "🦟 小摩斯蛋" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E6%90%9E%E6%80%AA%E4%BA%8C%E4%BA%BA%E7%BB%84.jpg", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E6%90%9E%E6%80%AA%E4%BA%8C%E4%BA%BA%E7%BB%84.jpg", title: "🤪 贴脸搞怪" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E7%83%9F%E5%9B%B1%E9%9D%A2%E5%8C%85.jpg", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E7%83%9F%E5%9B%B1%E9%9D%A2%E5%8C%85.jpg", title: "🥖 中央大街" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E6%A3%A0%E6%B9%96%E5%85%AC%E5%9B%AD.jpg", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E6%A3%A0%E6%B9%96%E5%85%AC%E5%9B%AD.jpg", title: "🌴 棠湖公园" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E4%B8%BD%E6%B1%9F.jpg", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E4%B8%BD%E6%B1%9F.jpg", title: "☁️ 丽江暮色" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E4%BE%9D%E5%81%8E.jpg", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E4%BE%9D%E5%81%8E.jpg", title: "🌙 你紧靠我~" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E4%B8%BD%E6%B1%9F%E5%A3%81%E7%94%BB.jpg", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E4%B8%BD%E6%B1%9F%E5%A3%81%E7%94%BB.jpg", title: "✌️ 双人合照" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E4%BD%A0%E7%9A%84%E7%AC%91%E8%84%B8.jpg", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E4%BD%A0%E7%9A%84%E7%AC%91%E8%84%B8.jpg", title: "😁 泡面蛋蛋" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E5%81%87%E7%AC%91%E7%94%B7%E5%AD%A9.jpg", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E5%81%87%E7%AC%91%E7%94%B7%E5%AD%A9.jpg", title: "📸 绵阳之旅" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/baby%E7%9D%A1%E8%A1%A3.jpg", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/baby%E7%9D%A1%E8%A1%A3.jpg", title: "👀 萌萌蛋妹儿" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/baby%E5%8D%95%E4%BA%BA.jpg", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/baby%E5%8D%95%E4%BA%BA.jpg", title: "🚗 在路上" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E4%B9%9D%E9%BE%99.jpg", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E4%B9%9D%E9%BE%99.jpg", title: "🏙️ 九龙广场" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E5%B0%8F%E6%B5%B7%E9%B8%A5.jpg", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/%E5%B0%8F%E6%B5%B7%E9%B8%A5.jpg", title: "🕊️ 湖边海鸥" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/first.png", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/first.png", title: "💌 故事开始" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/Internet.jpeg", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/Internet.jpeg", title: "🎮 网吧定情" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/walk.jpeg", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/walk.jpeg", title: "🌙 月下漫步" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/gk.jpeg", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/gk.jpeg", title: "🎓 高考异地" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/db.jpeg", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/db.jpeg", title: "❄️ 东北之旅" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/lijiang.jpeg", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/lijiang.jpeg", title: "🏔️ 丽江奇遇" },
    { type: "image", src: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/ky.jpeg", thumb: "https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/ky.jpeg", title: "📚 并肩作战" }
];

/* --- 逻辑控制 --- */
const els = {
    cover: document.getElementById('story-cover'),
    storyView: document.getElementById('story-view'),
    galleryView: document.getElementById('gallery-view'),
    quizBoard: document.getElementById('quiz-board'),
    quizDate: document.getElementById('quiz-date'),
    quizQ: document.getElementById('quiz-question'),
    quizHint: document.getElementById('quiz-hint'),
    quizA: document.getElementById('quiz-answer'),
    quizBtns: document.getElementById('quiz-btns'),
    photoFrame: document.getElementById('story-frame'),
    storyImg: document.getElementById('story-img'),
    
    dialogueWrapper: document.getElementById('dialogue-wrapper'),
    dialogueBox: document.getElementById('dialogue-box'),
    dialogueText: document.getElementById('dialogue-text'),
    speakerDate: document.getElementById('speaker-date'),
    sprite: document.getElementById('character-sprite'),
    
    galleryGrid: document.getElementById('galleryGrid'),
    lightbox: document.getElementById('lightbox'),
    lbMedia: document.getElementById('lbMediaWrapper'),
    lbTitle: document.getElementById('lbTitle'),
    lbDesc: document.getElementById('lbDesc'),
    musicBtn: document.getElementById('toggleMusic'),
    bgm: document.getElementById('bgm'),
    modeBtn: document.getElementById('toggleMode'),
    backBtn: document.getElementById('btn-back')
};

let storyIndex = 0;
let isTyping = false;
let typeTimer = null;
let isStoryFinished = false;

/* --- 移动端尺寸适配：修复 100vh 在 iOS/安卓浏览器的抖动与遮挡 --- */
function updateViewportVars() {
    // 1) 用 innerHeight 计算真实可视高度
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // 2) 动态写入 header 高度，避免不同机型/字体导致遮挡
    const header = document.querySelector('.header-bar');
    if (header) {
        const h = Math.round(header.getBoundingClientRect().height);
        if (h > 0) document.documentElement.style.setProperty('--header-h', `${h}px`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateViewportVars();
    // 旋转屏/地址栏收起展开都会触发 resize，延迟一次更稳
    window.addEventListener('resize', () => {
        updateViewportVars();
        setTimeout(updateViewportVars, 150);
    }, { passive: true });

    initGallery();
    initMusic();
    initModeSwitch();
});

/* 1. 模式切换 & 音乐切换 */
function initModeSwitch() {
    els.modeBtn.onclick = () => {
        if (els.storyView.classList.contains('hidden')) {
            // === 切换到故事模式 ===
            els.storyView.classList.remove('hidden');
            els.galleryView.classList.add('hidden');
            els.modeBtn.innerText = "🖼️ 切换模式";
            
            // 切换回 Stardew Valley Overture.mp3
            switchMusic("https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/Stardew%20Valley%20Overture.mp3");
        } else {
            // === 切换到画廊模式 ===
            els.storyView.classList.add('hidden');
            els.galleryView.classList.remove('hidden');
            els.modeBtn.innerText = "📖 返回故事";
            
            // 切换到画廊背景音乐
            switchMusic("https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/ruby.mp3");
        }
    };
}

// 辅助函数：切换音乐
function switchMusic(src) {
    // 如果已经在播放这首，就不打断
    if (els.bgm.src.includes(encodeURI(src))) return;
    
    // 如果当前正在播放，先记录状态
    const wasPlaying = !els.bgm.paused;
    
    els.bgm.src = src;
    els.bgm.load(); // 重新加载新源
    
    if (wasPlaying) {
        els.bgm.play().catch(e => console.log('Auto-play blocked'));
    }
}

/* 2. 故事流程 */
function startStory() {
    els.cover.classList.add('hidden');
    // 确保开始时播放的是故事音乐
    switchMusic("https://zyjpicture.oss-cn-beijing.aliyuncs.com/test/Stardew%20Valley%20Overture.mp3");
    // 如果还没播放，尝试播放
    if (els.bgm.paused) {
        els.bgm.play().then(() => els.musicBtn.innerText = "🎵 播放中").catch(console.log);
    }
    loadQuiz(0);
}

// === 加载问答 ===
function loadQuiz(idx) {
    isStoryFinished = false;
    if (idx >= storyTimeline.length) {
        endStory();
        return;
    }
    
    storyIndex = idx;
    const data = storyTimeline[idx];

    // 控制“上一步”按钮显示
    if (idx > 0) {
        els.backBtn.classList.remove('hidden');
    } else {
        els.backBtn.classList.add('hidden');
        document.body.classList.remove('has-sprite');

    }

    // 重置界面
    els.photoFrame.classList.add('frame-hidden');
    els.photoFrame.classList.remove('animate-enter'); 
    els.dialogueWrapper.classList.add('hidden'); 
    els.sprite.classList.add('hidden'); // 隐藏立绘
    els.quizBoard.classList.remove('hidden'); 
    
    // 填充数据
    els.quizDate.innerText = data.date;
    els.quizQ.innerText = data.question;
    els.quizHint.innerText = data.hint;
    els.quizA.innerText = data.answer;
    
    // 隐藏答案
    els.quizHint.classList.add('hidden');
    els.quizA.classList.add('hidden');
    
    // 生成按钮
    els.quizBtns.innerHTML = '';
    const btnConfirm = document.createElement('button');
    btnConfirm.className = 'pixel-btn confirm';
    btnConfirm.innerText = '我记得！(自信)';
    btnConfirm.onclick = showAnswer;
    
    const btnHint = document.createElement('button');
    btnHint.className = 'pixel-btn';
    btnHint.innerText = '唔...给个提示？';
    btnHint.onclick = () => { els.quizHint.classList.remove('hidden'); btnHint.style.display = 'none'; };
    
    els.quizBtns.append(btnConfirm, btnHint);
}

// === 上一步功能 ===
function prevStoryStep() {
    if (storyIndex > 0) {
        if(isTyping) {
            clearTimeout(typeTimer);
            isTyping = false;
        }
        loadQuiz(storyIndex - 1);
    }
}

function showAnswer() {
    els.quizHint.classList.add('hidden');
    els.quizA.classList.remove('hidden');
    els.quizBtns.innerHTML = '';
    
    const btnNext = document.createElement('button');
    btnNext.className = 'pixel-btn confirm';
    btnNext.innerText = '进入这段回忆 ❤️';
    btnNext.onclick = enterMemory;
    els.quizBtns.appendChild(btnNext);
}

// === 核心动画逻辑 ===
function enterMemory() {
    els.quizBoard.classList.add('hidden');
    els.backBtn.classList.add('hidden'); 
    
    setTimeout(() => {
        const data = storyTimeline[storyIndex];
        els.storyImg.src = data.img;
        
        // 显示对话框和立绘
        els.dialogueWrapper.classList.remove('hidden');
        els.sprite.classList.remove('hidden'); // 显示立绘
        document.body.classList.remove('has-sprite');

        
        // 更新讲述者时间
        els.speakerDate.innerText = `(${data.date})`;

        // 触发图片抛入动画
        els.photoFrame.classList.remove('frame-hidden', 'animate-enter');
        void els.photoFrame.offsetWidth; 
        els.photoFrame.classList.add('animate-enter');
        
        typeWriter(data.answer);
    }, 100);
}

function typeWriter(text) {
    els.dialogueText.innerHTML = "";
    isTyping = true;
    let i = 0;
    function type() {
        if (i < text.length) {
            els.dialogueText.innerHTML += text.charAt(i);
            i++;
            typeTimer = setTimeout(type, 40);
        } else {
            isTyping = false;
        }
    }
    type();
}

function nextStoryStep() {
    if (isStoryFinished) return; 

    if (isTyping) {
        clearTimeout(typeTimer);
        els.dialogueText.innerHTML = storyTimeline[storyIndex].answer;
        isTyping = false;
        return;
    }

    loadQuiz(storyIndex + 1);
}

function endStory() {
    isStoryFinished = true;
    els.quizBoard.classList.add('hidden');
    els.photoFrame.classList.add('frame-hidden');
    els.dialogueWrapper.classList.remove('hidden');
    els.sprite.classList.remove('hidden');
    document.body.classList.add('has-sprite');

    els.backBtn.classList.add('hidden'); 
    
    // 更新结束语的讲述者信息
    els.speakerDate.innerText = "(现在)";
    
    typeWriter("生日快乐！愿我们的生活像星露谷一样，简单、勤劳、充满收获和爱。");
}

/* 3. 画廊 */
function initGallery() {
    els.galleryGrid.innerHTML = '';
    galleryList.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.innerHTML = `<img src="${item.thumb}" loading="lazy"><p>${item.title}</p>`;
        div.onclick = () => openLightbox(index);
        els.galleryGrid.appendChild(div);
    });
}

let lbIndex = 0;
function openLightbox(index) {
    lbIndex = index;
    updateLightbox();
    els.lightbox.classList.remove('hidden');
}

function updateLightbox() {
    const item = galleryList[lbIndex];
    els.lbMedia.innerHTML = '';
    if (item.type === 'video') {
        const vid = document.createElement('video');
        vid.src = item.src;
        vid.controls = true;
        vid.autoplay = true;
        els.lbMedia.appendChild(vid);
    } else {
        const img = document.createElement('img');
        img.src = item.src;
        els.lbMedia.appendChild(img);
    }
    els.lbTitle.innerText = item.title;
    els.lbDesc.innerText = item.caption || item.title;
}

document.getElementById('lbClose').onclick = () => { els.lightbox.classList.add('hidden'); els.lbMedia.innerHTML = ''; };
document.getElementById('lbPrev').onclick = () => { lbIndex = (lbIndex - 1 + galleryList.length) % galleryList.length; updateLightbox(); };
document.getElementById('lbNext').onclick = () => { lbIndex = (lbIndex + 1) % galleryList.length; updateLightbox(); };

/* 4. 音乐 */
function initMusic() {
    els.musicBtn.onclick = () => {
        if (els.bgm.paused) {
            els.bgm.play();
            els.musicBtn.innerText = "🎵 播放中";
        } else {
            els.bgm.pause();
            els.musicBtn.innerText = "🔇 暂停";
        }
    };
}
