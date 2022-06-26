document.body.style.backgroundColor = "#000000";			// 背景色を変更
document.body.style.color = "#ffffff";	// 文字色を変更

var name;		// プレイヤーの名前
var lv;			// プレイヤーのレベル
var hp;			// プレイヤーのHP
var mp;			// プレイヤーのMP

var boss;		// ボスのヒットポイント

var n;				// 敵の数
var a;				// モンスター画像の処理
var is;				// モンスターの数
var d;				// 受けたダメージ
var m = 0;			// メッセージ変更
var de;				// デストラクションチャージ

var audio1 = new Audio("タイトル.mp3");
var audio2 = new Audio("城.mp3");
var audio3 = new Audio("森.mp3");
var audio4 = new Audio("魔王の城.mp3");
var audio5 = new Audio("ラスボス.mp3");
var audio6 = new Audio("エンディング.mp3");

title();
//opening
//battle
//bossbatle
//ending


function title(){
	lv = 1;
	hp = 10;
	mp = 0;
	boss = 1000;
	document.body.style.color = "#ffffff";
	audio1.loop = 'true';
	audio1.play();
	putImage("トムリンズクエスト.png");
	putButton("START.png", "opening1()");
	backimage("タイトル背景.jpg");
}


function opening1(){
	audio1.pause();
	audio1.currentTime = 0;
	audio2.loop = 'true';
	audio2.play();
	backimage("城背景.jpg");
	putreset();
	putImage("王様.png");
	putWindow("王：私はどっかの城の王じゃ。");
	putButton("NEXT.png", "opening2()");
}

function opening2(){
		putreset();
		putImage("王様.png");
		putWindow("王：突然じゃが、そなたには魔王退治を頼みたい。");
		putButton("NEXT.png", "opening3()");
}

function opening3(){
		putreset();
		putImage("王様.png");
		putWindow("王：引き受けてくれるかの？");
		putButton("はい.png", "opening5()");
		putButton("いいえ.png", "opening4()");
}

function opening4(){
		putreset();
		putImage("王様.png");
		putWindow("王：まあ、そんなことを言わずに。");
		putButton("はい.png", "opening5()")
		putButton("いいえ.png", "opening4()");
}

function opening5(){
		putreset();
		putImage("王様.png");
		putWindow("王：よくぞいってくれた。");
		putButton("NEXT.png", "opening6()");
}

function opening6(){
		putreset();
		putImage("王様.png");
		putWindow("王：では勇者・・・。");
		putButton("NEXT.png", "opening7()");
}

function opening7(){
		putreset();
		putImage("王様.png");
		putWindow("王：・・・ところでおぬし、名はなんと申す？");
		putButton("NEXT.png", "opening8()");
}

function opening8(){
		putreset();
		putImage("王様.png");
		putWindow("名前を入力してください。");
		putNameInput();
		putButton("NEXT.png", "checkname()");
}

function disp(code){
	if(code == 13)
		checkname();
}

function checkname(){
		name = document.js.txtb.value;
		if(name == "" || name == null){
			tomlins();
		}else{
			opening9();
		}
}

function tomlins(){
		name = "トムリンズ";
		putreset();
		putImage("王様.png");
		putWindow("王：それじゃあ、おぬしの名は" + name + "としよう。");
		putButton("NEXT.png", "opening9()");
}

function opening9(){
		putreset();
		putImage("王様.png");
		putWindow("王：では勇者" + name + "魔王退治頼んだぞ。");
		putButton("NEXT.png", "opening10()");
}

function opening10(){
		putreset();
		putImage("王様.png");
		putWindow("王：そうじゃおぬしにはこれをプレゼントしよう。");
		putButton("NEXT.png", "opening11()");
}

function opening11(){
		putreset();
		putImage("王様.png");
		putWindow(name + "は勇者の剣を手に入れた。");
		putButton("NEXT.png", "opening12()");
}

function opening12(){
		putreset();
		putImage("王様.png");
		putWindow(name + "は勇者の兜を手に入れた。");
		putButton("NEXT.png", "opening13()");
}

function opening13(){
		putreset();
		putImage("王様.png");
		putWindow(name + "は勇者の鎧を手に入れた。");
		putButton("NEXT.png", "opening14()");
}

function opening14(){
		putreset();
		putImage("王様.png");
		putWindow(name + "は王様からもらった装備をすべて身につけた。");
		putButton("NEXT.png", "opening15()");
}

function opening15(){
		putreset();
		putImage("王様.png");
		putWindow("王：では行くがいい勇者" + name + "よ。");
		putButton("NEXT.png", "forest1()");
}

function forest1(){
	audio2.pause();
	audio2.currentTime = 0;
	audio3.loop = 'true';
	audio3.play();
	backimage("外背景.jpg");
	putreset();
	putSpace();
	putWindow("こうして魔王を倒すため勇者" + name + "は旅をすることになった。");
	putButton("NEXT.png", "forest2()");
}

function forest2(){
	putreset();
	putSpace();
	putWindow("王様の情報によると、魔王は森を越えたところにある城に住んでいるらしい。");
	putButton("NEXT.png", "forest3()");
}

function forest3(){
	backimage("森背景.jpg");
	putreset();
	putSpace();
	putWindow("ようやく森にたどり着くと、奥からたくさんの魔物の気配がする。");
	putButton("NEXT.png", "forest4()");
}

function forest4(){
	putreset();
	putSpace();
	putWindow("勇者" + name + "は、そのまま森を突き進むことにした。");
	putButton("NEXT.png", "battle1()");
}

function battle1(){
			n = Math.random() * 10;
			n = Math.floor(n) + 1;
			a = "<div>";
			is = "<img src=\"モンスター１.png\">"
			for (var i = 0; i < n; i += 1){
				a += is;
			}
			a += "</div>";
			putreset();
			put(a);
			putStatus();
			putWindow("敵が" + n + "体あらわれた。<br>どうする？");
			putButton("たたかう.png", "attack1()");

}

function attack1(){
			d = Math.random() * 5;
			d = Math.floor(d);
			addHP(-d);
			if(hp < 0){
				hp = 0;
			}
			putreset();
			put(a);
			putStatus();
			putWindow(name + "は、" + d + "ダメージを受けた。");
			putButton("NEXT.png", "judgment1()");
}

function judgment1(){
			if(hp == 0){
				putGameOver();
			}else{
				lv += n;
				putreset();
				putSpace();
				putStatus();
				putWindow("魔物の群れを倒した。<br>" + name + "のレベルが" + n + "上がった。");
				if(lv >= 10){
					putButton("NEXT.png", "levelup1()");
				}else{
					putButton("NEXT.png", "battle1()");
				}
			}
}

function levelup1(){
				mp = 50;
				putreset();
				putSpace();
				putStatus();
				putWindow(name + "は、「ヒール」を覚えた。<br>「ヒール」はMPを20消費することでHPを全快させる魔法です。<br>" + name + "のMPが50に増えた。");
				putButton("NEXT.png", "battle2()");
}

function battle2(){
			if(m == 0){
				n = Math.random() * 10;
				n = Math.floor(n) + 1;
				a = "<div>";
				is = "<img src=\"モンスター２.png\">"
				for (var i = 0; i < n; i += 1){
					a += is;
					}
				a += "</div>";
				putreset();
				put(a);
				putStatus();
				putWindow("敵が" + n + "体あらわれた。<br>どうする？");
			}else{
				putreset();
				put(a);
				putStatus();
				putWindow("どうする？");
			}
			putButton("たたかう.png", "attack2()");
			putButton("ヒール.png", "heal2()");
}

function attack2(){
			d = Math.random() * 10;
			d = Math.floor(d);
			addHP(-d);
			if(hp < 0){
				hp = 0;
			}
			putreset();
			put(a);
			putStatus();
			putWindow(name + "は、" + d + "ダメージを受けた。");
			putButton("NEXT.png", "judgment2()");
}

function heal2(){
		m = 1;
		if(mp >= 20){
			document.body.style.color = "#ffffff";
			hp = lv + 10;
			mp -= 20;
			putreset();
			put(a);
			putStatus();
			putWindow(name + "のHPが" + hp + "に回復した。");
			putButton("NEXT.png", "battle2()");
		}else{
			putreset();
			put(a);
			putStatus();
			putWindow("MPが足りない。");
			putButton("NEXT.png", "battle2()");
		}
}

function judgment2(){
			m = 0;
			if(hp == 0){
				putGameOver();
			}else{
				lv += n;
				putreset();
				putSpace();
				putStatus();
				putWindow("魔物の群れを倒した。<br>" + name + "のレベルが" + n + "上がった。");
				if(lv >= 70){
					putButton("NEXT.png", "levelup2()");
				}else{
					putButton("NEXT.png", "battle2()");
				}
			}
}

function levelup2(){
				mp = 100;
				m = 0;
				putreset();
				putSpace();
				putStatus();
				putWindow(name + "は、「サンダー」を覚えた。<br>「サンダー」はMPを50消費することで敵に向かって雷を落とす魔法です。<br>" + name + "のMPが100に増えた。");
				putButton("NEXT.png", "battle3()");
}

function battle3(){
			if(m == 0){
				n = Math.random() * 10;
				n = Math.floor(n) + 1;
				a = "<div>";
				is = "<img src=\"モンスター３.png\">"
				for (var i = 0; i < n; i += 1){
					a += is;
					}
				a += "</div>";
				putreset();
				put(a);
				putStatus();
				putWindow("敵が" + n + "体あらわれた。<br>どうする？");
			}else{
				putreset();
				put(a);
				putStatus();
				putWindow("どうする？");
			}
			putButton("たたかう.png", "attack3()");
			putButton("ヒール.png", "heal3()");
			putButton("サンダー.png", "thunder3()");
}

function attack3(){
			d = Math.random() * 20;
			d = Math.floor(d);
			addHP(-d);
			if(hp < 0){
				hp = 0;
			}
			putreset();
			put(a);
			putStatus();
			putWindow(name + "は、" + d + "ダメージを受けた。");
			putButton("NEXT.png", "judgment3()");
}

function heal3(){
		m = 1;
		if(mp >= 20){
			document.body.style.color = "#ffffff";
			hp = lv + 10;
			mp -= 20;
			putreset();
			put(a);
			putStatus();
			putWindow(name + "のHPが" + hp + "に回復した。");
			putButton("NEXT.png", "battle3()");
		}else{
			putreset();
			put(a);
			putStatus();
			putWindow("MPが足りない。");
			putButton("NEXT.png", "battle3()");
		}
}

function thunder3(){
		if(mp >= 50){
			mp -= 50;
			n = Math.random() * 100;
			n = Math.floor(n) + 1;
			putreset();
			put(a);
			putStatus();
			putWindow("なんと！森全体に雷が降り注いだ！<br>" + n + "体の魔物が雷に巻き込まれた。");
			putButton("NEXT.png", "judgment3()");
		}else{
			m = 1;
			putreset();
			put(a);
			putStatus();
			putWindow("MPが足りない。");
			putButton("NEXT.png", "battle3()");
		}
}

function judgment3(){
			m = 0;
			if(hp == 0){
				putGameOver();
			}else{
				lv += n;
				putreset();
				putSpace();
				putStatus();
				putWindow("魔物の群れを倒した。<br>" + name + "のレベルが" + n + "上がった。");
				if(lv >= 100){
					putButton("NEXT.png", "castle1()");
				}else{
					putButton("NEXT.png", "battle3()");
				}
			}
}

function castle1(){
			audio3.pause();
			audio3.currentTime = 0;
			audio4.loop = 'true';
			audio4.play();
			backimage("魔王の城の外背景.jpg");
			putreset();
			putSpace();
			putWindow("ようやく勇者" + name + "は、森を抜けることに成功した。");
			putButton("NEXT.png", "castle2()");
}

function castle2(){
			backimage("魔王の城背景.jpg");
			putreset();
			putSpace();
			putWindow("そして城にたどり着いた" + name + "は、城の最上階まで上り魔王と対面した。");
			putButton("NEXT.png", "castle3()");
}

function castle3(){
			putreset();
			putImage("魔王.png");
			putWindow("魔王：よくたどり着いた勇者" + name + "よ。");
			putButton("NEXT.png", "castle4()");
}

function castle4(){
			putreset();
			putImage("魔王.png");
			putWindow("魔王：我は「王」ではなく「魔王」だ。");
			putButton("NEXT.png", "castle5()");
}

function castle5(){
			putreset();
			putImage("魔王.png");
			putWindow("魔王：断じて「王」ではないからな！");
			putButton("NEXT.png", "castle6()");
}

function castle6(){
			putreset();
			putImage("魔王.png");
			putWindow("魔王：勇者" + name + "よ。私を滅ぼすためにここまで来たのか？");
			putButton("はい.png", "castle8()");
			putButton("いいえ.png", "castle7()");
}

function castle7(){
			hp = 0;
			putreset();
			putImage("魔王.png");
			putWindow("魔王：そうか。・・・ならば死ね！");
			putButton("NEXT.png", "putGameOver()");
}

function castle8(){
			putreset();
			putImage("魔王.png");
			putWindow("魔王：いいだろう。我も本気を出すとしよう。");
			putButton("NEXT.png", "castle9()");
}

function castle9(){
			putreset();
			putBossImage();
			putWindow("なんと！魔王は、ドラゴンに姿を変えた。");
			putButton("NEXT.png", "castle10()");
}

function castle10(){
			putreset();
			putBossImage();
			putWindow("魔王：さあ、来るがいい！");
			putButton("NEXT.png", "castle11()");
}

function castle11(){
			audio4.pause();
			audio4.currentTime = 0;
			audio5.loop = 'true';
			audio5.play();
			putreset();
			putBossImage();
			putWindow("魔王があらわれた。");
			putButton("NEXT.png", "bossbattle()");
}

function bossbattle(){
			putreset();
			putBossImage();
			putStatus();
			putWindow("どうする？");
			putButton("たたかう.png", "bossattack()");
			putButton("ヒール.png", "bossheal()");
			putButton("サンダー.png", "bossthunder()");
}

function bossattack(){
	var bd = Math.random() * 200;
	bd = Math.floor(bd);
	boss -= bd;
	putreset();	
	putBossImage();
	putStatus();
	putWindow("魔王に" + bd + "ダメージを与えた。");
	putButton("NEXT.png", "bosscheck()");
}

function bosscheck(){
	if(boss <= 0){
		bossjudgment();
	}else{
		bossturn();
	}
}

function bossturn(){
	if(de == 1){
		de = 0;
		d = Math.random() * 100;
		d = Math.floor(d);
		if(hp < 0){
			hp = 0;
		}
		putreset();	
		putBossImage();
		putStatus();
		putWindow("魔王は、「デストラクション」を唱えた。");
		putButton("NEXT.png", "bossjudgment()");
	}else{
		var r = Math.random() * 5;
		r = Math.floor(r) + 1;
		switch(r){
			case 1:{
				d = Math.random() * 30;
				d = Math.floor(d);
				if(hp < 0){
					hp = 0;
				}
				putreset();	
				putBossImage();
				putStatus();
				putWindow("魔王の攻撃！");
				putButton("NEXT.png", "bossjudgment()");
				break;
			}
			case 2:{
				d = Math.random() * 30;
				d = Math.floor(d);
				if(hp < 0){
					hp = 0;
				}
				putreset();
				putBossImage();
				putStatus();
				putWindow("魔王の攻撃！");
				putButton("NEXT.png", "bossjudgment()");
				break;
			}
			case 3:{
				d = Math.random() * 50;
				d = Math.floor(d);
				if(hp < 0){
					hp = 0;
				}
				putreset();
				putBossImage();
				putStatus();
				putWindow("魔王は、炎の息を吐いた");
				putButton("NEXT.png", "bossjudgment()");
				break;
			}
			case 4:{
				d = Math.random() * 50;
				d = Math.floor(d);
				if(hp < 0){
					hp = 0;
				}
				putreset();
				putBossImage();
				putStatus();
				putWindow("魔王は、炎の息を吐いた");
				putButton("NEXT.png", "bossjudgment()");
				break;
			}
			case 5:{
				de = 1;
				d = 0;
				putreset();
				putBossImage();
				putStatus();
				putWindow("魔王は力を蓄えている。");
				putButton("NEXT.png", "bossbattle()");
				break;
			}
		}
	}
}

function bossheal(){
		if(mp >= 20){
			document.body.style.color = "#ffffff";
			hp = lv + 10;
			mp -= 20;
			putreset();
			putBossImage();
			putStatus();
			putWindow(name + "のHPが" + hp + "に回復した。");
			putButton("NEXT.png", "bossbattle()");
		}else{
			putreset();
			putBossImage();
			putStatus();
			putWindow("MPが足りない。");
			putButton("NEXT.png", "bossbattle()");
		}
}

function bossthunder(){
		if(mp >= 50){
			mp -= 50;
			var bd = Math.random() * 1000;
			bd = Math.floor(bd);
			putreset();
			putBossImage();
			putStatus();
			putWindow("魔王に雷が降り注ぐ！<br>魔王に" + bd + "ダメージを与えた。");
			putButton("NEXT.png", "bossturn()");
		}else{
			putreset();
			putBossImage();
			putStatus();
			putWindow("MPが足りない。");
			putButton("NEXT.png", "bossbattle()");
		}
}

function bossjudgment(){
		putreset();
		putBossImage();
		if(boss <= 0){
			audio5.pause();
			audio5.currentTime = 0;
			putStatus();
			putWindow("魔王を倒した！");
			putButton("NEXT.png", "ending1()");
		}else{
			addHP(-d);
			putStatus();
			putWindow(name + "は、" + d + "ダメージを受けた。");
			if(hp == 0){
				putButton("NEXT.png", "putGameOver()");
			}else{
				putButton("NEXT.png", "bossbattle()");
			}
		}
}

function ending1(){
			document.body.style.color = "#ffffff";
			audio6.loop = 'true';
			audio6.play();
			document.body.style.backgroundImage = "";
			putreset();
			putSpace();
			putWindow("魔王は、勇者" + name + "によって倒された。");
			putButton("NEXT.png", "ending2()");
}

function ending2(){
			putreset();
			putSpace();
			putWindow("そして、" + name + "は、城に帰っていった。");
			putButton("NEXT.png", "ending3()");
}

function ending3(){
			backimage("城背景.jpg");
			putreset();
			putImage("王様.png");
			putWindow("王：よくぞ魔王を倒してくれた。");
			putButton("NEXT.png", "ending4()");
}

function ending4(){
			putreset();
			putImage("王様.png");
			putWindow("王：礼を言うぞ" + name + "。");
			putButton("NEXT.png", "ending5()");
}

function ending5(){
			putreset();
			putImage("王様.png");
			putWindow("王：それはそうと、おぬしはそろそろ現実の世界に帰る時間ではないのか？");
			putButton("NEXT.png", "ending6()");
}

function ending6(){
			putreset();
			putImage("王様.png");
			putWindow("王：安心なさい現実世界へは私が送り届けよう。");
			putButton("NEXT.png", "ending7()");
}

function ending7(){
			putreset();
			putImage("王様.png");
			putWindow("王：では、さらばじゃ・・・。");
			putButton("NEXT.png", "ending7()");
}

function ending7(){
			putreset();
			putImage("王様.png");
			putWindow("GAME CLEAR!!");
			putButton("NEXT.png", "ending7()");
}

function ending7(){
			putreset();
			putImage("王様.png");
			putWindow("GAME CLEAR!!");
			putButton("NEXT.png", "credit()");
}

function credit(){
			document.body.style.backgroundImage = "";
			putreset();
			put("<br><br>");
			put("画像提供");
			put("「Ｒド」");
			put("「誰そ彼亭」");
			put("<br>");
			put("音楽提供");
			put("「甘茶の音楽工房」");
			put("<br>");
			putButton("NEXT.png", "GameClear()");
}

function GameClear(){
	putreset();
	putSpace();
	putWindow("お疲れ様でした。<br>「NEXT」ボタンでタイトルにもどります。");
	putButton("NEXT.png", "next()");
}

function putWindow(str){
	put("<div style=\"border:3px solid #ffffff; background:#000000;  border-radius:6px; text-align:left;\">" + str + "<div style = \"text-align:center\">▼</div>" + "</div>");
}

function putCenterWindow(str){
	put("<div style=\"border:3px solid #ffffff; background:#000000;  border-radius:6px; text-align:center;\">" + str + "</div>");
}

function putStatus(){
	putCenterWindow(name + "　Lv" + lv + "　HP" + hp + "　MP" + mp);
}

function putButton(str1, str2){
	put("<button type=\"button\" style=\"background-color:#000000;\" onClick=\"" + str2 + "\"><IMG src=\"" + str1 + "\" width=\"190\" height=\"45\" border=\"0\"></button>");
}

function putImage(str){
	put("<br><br><img src=\"" + str + "\"><br>");
}

function putBossImage(){
	put("<img src=\"ラスボス.png\"><br>");
}

function putSpace(){
	put("<br><br><br><br>");
}

function putGameOver(){
	document.body.style.color = "#ff3300";
	putreset();
	putSpace();
	putStatus();
	document.body.style.backgroundImage = "";
	putWindow("GAME OVER<br>" + name + "は、力尽きてしまった。<br>「NEXT」ボタンでタイトルにもどります。" );
	putButton("NEXT.png", "next()");
}

function next(){
	audio3.pause();
	audio3.currentTime = 0;
	audio4.pause();
	audio4.currentTime = 0;
	audio5.pause();
	audio5.currentTime = 0;
	audio6.pause();
	audio6.currentTime = 0;
	putreset();
	title();
}

function putNameInput(){
	putCenterWindow("<form name=\"js\">右の枠の中に入力してください。<input type=\"text\" name=\"txtb\" value=\"\" onkeypress=\"disp(event.keyCode);\"><input type=\"text\" style=\"visibility:hidden\"></form>");
}

function put(str){
	document.body.innerHTML += str + "<br>";
}

function putreset(){
	document.body.innerHTML = "";
}

function backimage(str){
	document.body.style.backgroundImage = "url(" + str + ")";
}


function addHP(val){
	hp += val;
	if (hp <= 0){
		hp = 0;
		document.body.style.color = "#ff3300";
	}else if((lv + 10) / 4 > hp){
		document.body.style.color = "#ffaa00";
	}else{
		document.body.style.color = "#ffffff";
	}
}
