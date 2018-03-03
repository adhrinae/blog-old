webpackJsonp([4767462813459],{425:function(e,h){e.exports={data:{markdownRemark:{html:'<ul>\n<li>이 글의 원문은 <a href="http://www.yegor256.com/2015/02/09/serious-code-reviewer.html">Yegor Bugayenko가 작성하였습니다.</a></li>\n<li>오역 지적 및 더 나은 번역을 위한 제안은 언제나 환영합니다.</li>\n</ul>\n<hr>\n<p><a href="http://en.wikipedia.org/wiki/Code_review">코드 평가</a>(다른 말로 동료 평가)는 모든 소프트웨어 개발 팀의 필수 원칙이 되어야합니다. 제 말에 이견이 없기를 바랍니다. 어떤 팀은 머지가 되기 전에 코드 평가를 하여 master/development 브랜치에 우연찮은 실수가 <a href="http://www.yegor256.com/2014/07/21/read-only-master-branch.html">덮어씌워지지 않도록</a> 하고, 어떤 팀은 머지가 된 후에 버그나 어긋나는 점을 발견하기 위해 코드의 작성자와 <a href="http://www.yegor256.com/2014/12/18/independent-technical-reviews.html">일반적인 평가</a>를 합니다. 어떤 팀은 둘 다 하기도 합니다. 코드 평가는 평가자가 소프트웨어 전체 소스의 접근 권한을 가지고 결점을 찾아내는 <a href="https://ko.wikipedia.org/wiki/%ED%99%94%EC%9D%B4%ED%8A%B8%EB%B0%95%EC%8A%A4_%EA%B2%80%EC%82%AC">화이트박스 평가</a> 기술과 아주 유사합니다. 어느 경우든 코드 평가는 퀄리티 향상 및 팀의 동기 부여를 위한 좋은 도구가 됩니다.</p>\n<p>하지만 코드 평가를 제대로 하기는 어렵습니다. 오히려 잘못 하기가 훨씬 쉽다고 말씀드리고 싶습니다. 제가 여태까지 본 바로는 대부분의 코드 평가와 평가자는 비슷한 실수를 반복해왔습니다. 그래서 제가 알고 있는 좋은 코드 평가자들이 가지고 있는 네 가지 기본 원칙을 정리하는 글을 작성하게 되었습니다. 이 글이 도움이 되길 바랍니다.</p>\n<h2 id="두려움을-가지지-않기no-fear"><a href="#%EB%91%90%EB%A0%A4%EC%9B%80%EC%9D%84-%EA%B0%80%EC%A7%80%EC%A7%80-%EC%95%8A%EA%B8%B0no-fear" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>두려움을 가지지 않기(No Fear)</h2>\n<p>진짜배기 코드 평가자라면 갖지 말아야 할 몇 가지 두려움이 있습니다. 첫 번째이자 가장 유명한 두려움은 코드의 작성자를 공격하는 일입니다. <em>"오늘은 그냥 눈을 감고 저 버그를 못 본척 하면 내일 작성자는 내 실수(버그를 못 봄)를 알아차리지 못할거야."</em> - 이런 태도가 만들어내는 두려움입니다. 말할 필요도 없겠지만 이는 비생산적이고 코드 퀄리티와 팀의 사기를 낮추는 일입니다. 조언을 드리자면 직설적이고, 솔직하고, 간결하게 이야기하세요. 당신이 이 코드가 맘에 들지 않는다면 말 그대로 맘에 들지 않는겁니다. 당신의 의견이 코드의 작성자에게 어떻게 받아들여질지 신경쓸 필요가 없습니다.</p>\n<p>만약 당신이 동료를 향해 신경쓰이는 기분이 든다면 회사 혹은 팀의 경영 측면에서 문제가 있는 겁니다. 되려 못하는 사람에게 "팀 플레이어가 아니다" 라는 낙인찍힐까봐 두려워하고 있는 겁니다. 평가를 해야 하는 사람은 프로젝트 스폰서입니다. 스폰서는 당신이 제품의 질을 신경쓰지 않는 다른사람을 불쾌하게 한다고 얼마나 개선이 될 지 신경쓰지 않습니다. 그저 제품을 생산하여 사용자들로부터 돈을 벌어오길 원합니다. 스폰서는 당신이 <a href="http://www.yegor256.com/2015/10/06/how-to-be-good-office-slave.html">회사에서</a> 친구를 사귀라고 급여를 주는 게 아닙니다.</p>\n<p>다른 종류의 두려움은 이런 식으로 나타납니다. <em>"내가 이 코드를 거부하면 제품 발매(release)가 늦어질거야."</em> - 다시 한 번, 이런 태도는 프로젝트 전체에 커다란 해가 된다는 말씀을 드리고 싶습니다. 당신은 코드에서 마음에 들지 않는 부분을 눈 감고 외면한 뒤에 승인을 합니다. 코드는 다음 배포판에 포함될 예정이고 더 빨리 출시할 수 있게 되었습니다. 발매를 늦추는 병목현상도 없었으며 아무도 당신에게 \'저 지멋대로인 코드 평가자 때문에 발매가 늦춰지고 돈을 덜 벌게 되었다\' 는 말을 하지 않습니다. 당신은 좋은 팀 플레이어입니다. 그럴까요? 그럴리가요!</p>\n<p>지난 번 <a href="http://www.yegor256.com/2015/01/15/how-to-cut-corners.html">제가 언급했듯이</a>, 전문적인 팀 플레이어는 자신의 역할이 다른 사람 뒤를 봐주는 일이 아니라는 것을 알고 있습니다. <a href="http://www.yegor256.com/2015/11/24/imprisonment-for-irresponsible-coding.html">나쁜 코드</a>를 거부하여 발매가 늦어진다면, 이는 코드 작성자의 잘못입니다. 전문가로서 당신의 책임은 이런 결점을 찾아내는 것입니다. 이렇게 팀의 학습과 발전을 위해 도움을 주어야 합니다.</p>\n<p>저는 팀의 학습과 성장을 위해서 가장 먼저 해야할 일이 나쁜 프로그래머를 없애고 좋은 프로그래머를 끌어올리는 것이라 생각합니다. 솔직하고 두려움 없는 코드 평가자들은 팀의 학습과 성장을 돕습니다.</p>\n<p>또 이런 두려움도 있습니다. <em>"내가 잘못 본거라면 다른 사람들에게 놀림받을 거야"</em> - 더 심하면 다른 사람들이 당신이 부족한 지식을 가지고 있다고 지적할 수도 있고, 당신이 \'내가 대체 뭘 하고 있는지 모르겠다\' 는 표정을 짓고 있는 모습을 볼 수도 있습니다. 그렇다면 그냥 조용히 앉아서 버그를 못본 척 할 수도 있습니다. 최소한 멍청한 코멘트를 달았다고 당황하진 않을 테니까요. 당신은 더 똑똑해 보이기 위해 입을 다무는게 낫겠지요. 그렇겠지요? 틀렸다니까요!</p>\n<p>프로젝트(스폰서)는 괜찮은 모습을 보이라고 급여를 주는 게 아닙니다. 당신은 팀원에게 사랑받기 때문에 급여를 받는 게 아니라 매일 제품을 만들기 위해 급여를 받는 겁니다. 전문가로서 당신의 책임은 프로젝트를 위해 최선을 다하고, 그러기 위해 모두의 의견을 무시할 수도 있어야 합니다. 상급자의 의견도 포함해서요. <a href="http://www.yegor256.com/2015/01/26/happy-boss-false-objective.html">"행복한 상급자(대표) 만들기는 잘못된 목표다"</a> 라는 글의 내용과 비슷하게, \'팀에서 존경받는 사람 되기\'는 잘못된 목표라는 말씀을 드리고 싶습니다. 존경을 구걸하는 대신 깔끔한 코드를 짜면 자연스레 존경받게 됩니다.</p>\n<p>다시 한번 말씀드리자면 다른 사람의 코드에 잘못되거나 멍청한 코멘트를 달았다고 당황하게 되는 일을 두려워하지 마십시오. 다른 사람이 당신에게 가지고 있는 기대를 위하지 말고 프로젝트를 위해 최선을 다하십시오. 팀원들은 당신이 똑똑하고 총명하게 보이길 바랄 수 있겠지만, 프로젝트는 당신이 이 코드를 어떻게 생각하는지 말해주길 바랍니다. 그러니까 그런 사람들의 의견은 무시하세요. 당신이 올바르다고 생각하는 일을 하세요.</p>\n<h2 id="타협하지-않기no-compomise"><a href="#%ED%83%80%ED%98%91%ED%95%98%EC%A7%80-%EC%95%8A%EA%B8%B0no-compomise" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>타협하지 않기(No Compomise)</h2>\n<p>자, 당신은 두려움 없이 특정 코드에 대한 생각을 말하고 거부하였습니다. 당신이 평가하고 있던 브랜치는 좋지 않았고 그 이유도 설명했습니다. 그리고 작성자에게 이 부분은 고치고(Refactor) 저 부분은 다시 쓰라고 지시하였습니다. 그 다음은요?</p>\n<p>그/그녀는 당신과 거래를 하려고 할 겁니다. 이는 자연스러운 현상이고 저희 팀에서 제가 살펴보는 대부분의 브랜치에서 일어납니다. 코드의 작성자도 마찬가지로 전문 개발자이며 마찬가지로 두려움이 없습니다. 그래서 자신의 구현 방법이 옳았고 당신의 생각이 틀렸다고 주정합니다. 전문적인 코드 평가자라면 이 경우에 어떻게 해야할까요?</p>\n<p>가장 최악의 갈등 해결 방법은 \'\'타협하기\'\' 입니다. 나쁜 코드를 작성하는 것 보다 더 빠르게 제품의 질을 망치는 길입니다. 타협은 갈등 해결을 위해 양측이 원하는 것을 갖지 않기로(혹은 하지 않기로) 합의하는 방식의 갈등 조절 기술입니다. 다른 말로 표현하자면 <em>"우리 그만 싸우고 평화롭게 지내자"</em> 인데, 문제 해결 측면에서 최악의 방식입니다.</p>\n<p>좋지도 않은 타협을 하기보다, 전문가로서 코드 자체를 위해 실천할 수 있는 세 가지 방법이 있습니다.</p>\n<ul>\n<li><em>"당신 말이 맞아요, 제 생각을 철회합니다."</em>: 보통 이런 일이 자주 일어납니다. 당신은 자신의 실수를 인정할 준비가 되어있어야 합니다. 코드가 맘에 들지 않았지만 코드의 작성자가 이 코드를 적용할 때 생기는 이익을 설명하였고 당신은 그 로직을 받아들인 겁니다. 절대로 \'싸우기 싫어서\' 가 아니라 진정 로직을 이해하고 받아들이는 겁니다. 기꺼이 \'내가 틀렸습니다.\' 라고 말하는 것은 성숙하고 진지한 개발자의 첫 번째 덕목입니다.</li>\n<li><em>"난 절대 영원히 인정할 수 없어!"</em>: 어떤 코드는 이럴 수도 있는데, 이렇게 갈등을 해결하는 방법이 잘못된 것은 아닙니다. 상대방은 이 상황을 받아들이고 전부 다시 작성하게 되겠지요. 그리고 새로운 것도 배울 수 있을겁니다.</li>\n<li><em>"설계자가 뭐라고 하는지 들어보자!"</em>: 모든 프로젝트에는 최종적인 결정을 내리는 <a href="http://www.yegor256.com/2014/10/12/who-is-software-architect.html">소프트웨어 설계자</a>가 있습니다. 이 사람에게 말하고 최종적인 결정을 내려달라고 부탁해 보세요. 토론이 벌어지고 있는 상황에서 설계자를 대려온 다음 한쪽 편을 들어달라고 이야기하는 겁니다. 그 사람이 당신이 잘못되었다고 이야기한다면 그 결정을 받아들이고, 이번 경험에서 새로이 무언가를 배우도록 노력해보세요.</li>\n</ul>\n<p>이와 같이 당신의 의견을 고수하며 싸우거나 잘못되었음을 인정하세요. 한 쪽을 고르되 절대 타협하지 마십시오!</p>\n<p>제 말을 잘못 받아들이지 마시길 바랍니다. 고집불통이 되라거나 나쁜 패를 죽어도 놓지 않는(holding your cards no matter how bad they are) 사람이 되라는 이야기가 아닙니다. 유연하게 생각하고 배울 점은 배우세요. 당신의 입장은 협의를 하면서 얼마든지 변할 수 있습니다만, 맘에 들지 않는 어떤 것이라도 받아들이면 안됩니다. 당신은 상대가 옳았음을 완전히 받아들이거나 (아니면 그 반대), 설계자가 \'이렇게 해라\' 라고 말했을 때만 갈등에서 빠져나올 수 있습니다. 중간 지점은 없습니다.</p>\n<h2 id="개소리하지-않기no-bullshit"><a href="#%EA%B0%9C%EC%86%8C%EB%A6%AC%ED%95%98%EC%A7%80-%EC%95%8A%EA%B8%B0no-bullshit" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>개소리하지 않기(No Bullshit)</h2>\n<p>이제 당신은 특정 메서드가 다르게 디자인 되어야한다고 고민없이 지적했습니다. 코드의 작성자는 그렇게 생각하지 않는다고 답변했지요. 그 코드를 다시 살펴보고 나서 자신의 주장을 굽히지 말아야겠다고 생각했다 칩시다. 당신은 여전히 자신이 옳다고 생각하고 타협할 생각도 없습니다. 이제 어떡할까요? 설계자를 부르기에 너무 이르기 때문에 상대방을 설득해보기로 했습니다.</p>\n<p>대부분의 경우 설득하는 일은 가르치는 일입니다. 당신은 상대방이 모르는 것을 알고 있기 때문에 그 메서드가 맘에 안든다고 생각했을 겁니다. 그 사람은 추가적인 교육이 필요한 상태이구요. 이제 동료를 가르칠 수 있는 기회가 왔습니다. 효과적인 가르침을 위해선 증거가 필요합니다. 당신은 자신의 논리를 단단히 하여 상대방이 이해하고 받아들일 수 있도록 해야합니다.</p>\n<p>링크나 기사, 책, 보고서, 예시 등을 준비하세요. <em>"나는 자바를 15년이나 써 왔으니 이걸 알고 있다"</em> 같은 소리는 도움이 되지 않습니다. 게다가 이런 방식의 논쟁은 당신의 설득력을 떨어뜨릴 뿐입니다.</p>\n<p>만약 설득하기 위한 증거가 충분하지 않다면 다시 생각해보세요. 당신이 틀렸을 수도 있습니다.</p>\n<p>그리고 당신이 하는 일은 평가하고 있는 코드가 잘못되었음을 증명하는 겁니다. 코드의 작성자는 아무것도 증명할 필요가 없습니다. 그/그녀의 코드는 기본적으로 훌륭하겠지요. 평가자는 어떻게, 왜 이 코드가 잘못된 경우인지 보여주어야 합니다. 다르게 말하자면 당신은 고소인이고 상대방은 피고소인이 되겠지요. 그 반대는 성립하지 않습니다(Not the other way around).</p>\n<h2 id="모욕하지-않기no-offense"><a href="#%EB%AA%A8%EC%9A%95%ED%95%98%EC%A7%80-%EC%95%8A%EA%B8%B0no-offense" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>모욕하지 않기(No Offense)</h2>\n<p>제일 마지막이자 제일 어려운 원칙을 알려드리겠습니다. 아무리 코드가 형편 없고 코드의 작성자가 고집불통이라도 전문가의 태도를 유지하세요. 솔직히 말씀드리자면 때로는 저도 이렇게 하기 아주 어렵다고 생각합니다. <a href="http://www.teamed.io/">teamd.io는</a> 광범위한 팀으로 작업을 하고 있고 매주 몇 명의 새로운 사람들을 고용합니다. 그들 중 일부는 <a href="http://www.yegor256.com/2014/10/29/how-much-do-you-cost.html">우리의 심사 기준</a>에도 불구하고 다소 어리석게 대처하는 것 처럼 보입니다.</p>\n<p>약 1년 전에, 새로 온 개발자가 이미 있는 자바 라이브러리에 작지만 새로운 기능(약 20~30줄 짜리 코드)을 추가해야 했습니다. 저는 그 때 웃긴 일을 겪었습니다. 그는 수백줄 짜리 코드를 작성한 뒤에 저에게 풀 리퀘스트를 보냈습니다(제가 코드 평가자였습니다). 그 코드는 완전 쓰레기였으며 심지어 그 사람이 작성한 것도 아니었습니다. 저는 보자마자 이 사람이 어딘가에서 찾아낸 코드를 복사했다는 사실을 간파했습니다. 그런데 제가 어떻게 했을까요? 어떻게 \'당신의 태도는 전문적인 개발자로서 용납될 수 없다\' 며 길길이 날뛰지 않고 이 코드를 거부할 수 있었을까요? 저는 시간을 좀 내서 객관적으로 그의 코드를 비판했습니다. 스타일, 디자인 등 수많은 진지한 코멘트를 달아서 그에게 전부 고치라고 말했고, 그 사람은 쓰레기를 전부 지운 뒤에 바닥부터 다시 코드를 작성했습니다. 그 작업 이후에 그 사람을 다시 보는 일은 없었습니다.</p>\n<p>제가 말씀드리고 싶은 것은 전문가를 다룰 때는 전문가다운 생각을 하기 쉽지만 <em>(역주: 제대로된 코드를 보면 사람답게 대화할 수 있다는 뜻으로 보입니다)</em>, 언제나 다른 경우를 접할 수도 있습니다. 하지만 아무리 당신이 보고 있는 코드가 형편없더라도 참을성을 가지고 설득력 있게 대하십시오.</p>\n<hr>\n<h2 id="번역-후기"><a href="#%EB%B2%88%EC%97%AD-%ED%9B%84%EA%B8%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>번역 후기</h2>\n<p>정말 오랜만에 새 번역을 하게 되었습니다. 진작에 한번 읽어놓고 \'다음에 번역할 글은 너로 정했다!\' 라고 생각해놓고 모셔두었지만 어느새 시간이.. 바쁘다는 핑계는 댈 것도 없으며 제 자신의 게으름을 탓하게 됩니다.</p>\n<p>코드 리뷰(코드 평가)를 할 때 다른 분들은 어떻게 하는지 모르겠지만 여러 가지 이야기가 오가게 될 겁니다. 그 와중에 타협을 하는 경우도 적지 않게 많이 있을 테고, 아예 코드 리뷰 자체를 안하는 팀이 있을지도 모르겠네요. 타협과 관한 부분에서 특히 느낀 점이 많았습니다.</p>\n<p>아무쪼록 팀 단위로 작업을 하실 때 더 좋은 결과물을 만드는데 도움이 될 수 있기를 바랍니다.</p>',frontmatter:{date:"2017/05/27",path:"/posts/four-nos-of-serious-code-reviewer-kor",title:"[번역] 진짜배기 코드 평가자라면 하지 말아야 할 네 가지",tags:["Programming","Code Review","Translation"]}},site:{siteMetadata:{siteUrl:"https://emaren84.github.io",disqusShortUrl:"gatsby-blog-1"}}},pathContext:{}}}});
//# sourceMappingURL=path---posts-four-nos-of-serious-code-reviewer-kor-1b8a4fc4f4168036a946.js.map