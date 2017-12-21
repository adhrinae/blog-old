webpackJsonp([79338355588033],{431:function(n,s){n.exports={pathContext:{postsByTag:[{excerpt:"이 글은 Twitter  @ageldama 님의 TDD 조언에 관한 글타래를 허락 받고 정리한 내용입니다. 정리하면서 말씀하신 의도가 약간 달라진 부분 혹은 제 지식이 부족하여 제대로 표현하지 못한 부분도 있을 수 있습니다. 피드백환영합니다. 해당 포스팅은  Medium…",html:'<p><img src="https://cdn-images-1.medium.com/max/1600/1*jFw7ZZMoVcsEYM_fS33DBA.gif"></p>\n<p>이 글은 Twitter <a href="https://twitter.com/ageldama">@ageldama</a>님의 TDD 조언에 관한 글타래를 허락 받고 정리한 내용입니다. 정리하면서 말씀하신 의도가 약간 달라진 부분 혹은 제 지식이 부족하여 제대로 표현하지 못한 부분도 있을 수 있습니다. 피드백환영합니다. 해당 포스팅은 <a href="https://medium.com/@devRinae/tdd-test-driven-development-%EB%A5%BC-%EC%97%B0%EC%8A%B5%ED%95%98%EB%A9%B4%EC%84%9C-%EC%B0%B8%EA%B3%A0%ED%95%98%EA%B8%B0-%EC%A2%8B%EC%9D%80-%ED%8C%81-10%EA%B0%80%EC%A7%80-d8cf46ae1806">Medium에 먼저 발행되었으니</a> 댓글로 의견 공유 부탁드립니다.</p>\n<p><strong>(번호가 중요도 혹은 순서를 나타내지 않습니다)</strong></p>\n<ol>\n<li><strong>유닛 테스트를 한다면 테스트할 주제와 대상 클래스를 정하고, 대상 클래스가 사용하는 의존성(패키지일 수도 있고 특정 함수일 수도있겠지요)들은 Mock이나 Stub으로 만든다.</strong> <a href="https://stackoverflow.com/questions/3459287/whats-the-difference-between-a-mock-stub">(Mock과 Stub이란?)</a> Mocking을 어떻게 하는지는 사용하는 언어마다 주로 사용하는 테스팅 프레임워크의 레퍼런스를 참고하라. 그러고 나면 자신이 의존성을 잘 정리했는지 살펴보기 좋아지고, 이어서 테스트하기 좋은 형태가 눈에 들어오기 시작한다.</li>\n<li><strong>무엇을 테스트할지 정하기 어렵다면?</strong> 단위 테스트를 예로 들면 자신이 만든 클래스나 모듈, 함수 등의 기능이 정상적으로 동작하는지 확인하기 위해 테스트를 작성한다고 생각해보라.</li>\n<li><strong>Q: 테스트를 작성하는데 “망했다” 혹은 “잘못되었다” 는 느낌이 든다. / A:</strong> 오히려 좋은 징조인데, 당신이 작성한 테스트는 리팩토링 및 회귀 테스트 시 복구해야 할 곳이 있음을 보여주고, 제대로 복구하고 있다는 지침이 된다.</li>\n<li>처음에는 작성한 모듈이나 클래스 비율이 높게 테스트를 짜는데, 단언(assertions)은 조금 엉성하더라도 기본적인 부분만 확인하도록 작성한다. 이후 리팩토링을 하면서 다양한 경우에 대응하기 위해 단계적으로 단언을 추가한다.</li>\n<li><strong>원칙적으로 TDD인만큼</strong> 테스트를 먼저 스펙에 반영해 작성하고, 그에 따라 테스트를 충족하기 위해 코드를 작성 후 리팩토링 하는 것이 바람직하지만 <strong>실제로는 쉽지 않다</strong>. 초심자라면 코드를 어느 정도 수준까지 짜 놓고 테스트, Mock을 붙이는걸 권한다. — <a href="https://emaren84.github.io/posts/how-do-you-take-an-app-from-no-tests-to-tdd-kor">참고 포스트</a></li>\n<li>처음부터 Mocking을 하지 않아도 좋다. 입력과 기대값이 명확하게 나타나는 로직 부분일수록, 또한 다른 모듈이나 DB 등 외부 시스템과 연결이 없을 수록 테스트를 작성하기 쉽고 그 효과를 체감하기 쉽다.</li>\n<li><strong>가장 중요한 것은 테스트가 다 붙은 상황에서 리팩토링을 시작하는 것이다.</strong> 테스트가 깨지는 것을 보고 코드와 테스트를 계속 수정해나가면서 연습해보면 <strong>“테스트 먼저”</strong>를 어떻게 하게 되는지 자연스럽게 익히게 된다.</li>\n<li><strong>Q: E2E(End-to-End) 과정을 생각해서 하나씩 시나리오대로 테스트를 짜는 것이 좋지 않나? / A:</strong> 맨 처음 스펙 도출 이후 테스트 작성, 단언, Mocking 등 순차적으로 내려가는 것이 좋겠지만, 일반적인 테스팅 프레임워크를 적용해서 작은 단위로 테스트를 작성해야 단순하고 쉽게 접근할 수 있기 때문에 개별 모듈별로 먼저 단위 테스트를 시도해 보는 것을 권장한다.</li>\n<li><strong>UI를 테스트할 때는 다른 테스팅 기법과 도구들이 잘 맞을 수도 있다.</strong> 하지만 UI 테스트나 일반 테스트 모두 공통적으로 테스트를 <strong>어떻게든</strong> 만들기 위해 노력하고, 테스트 기법 및 테스트에 맞게 자신의 코드를 생각해야 한다.</li>\n<li><strong>테스트 커버리지는 모듈 단위로, 단언은 세세하게.</strong> 테스트하고자 하는 모듈의 테스트 골격을 먼저 잡아 놓으면, 이를 기반으로 더 세세한 고려 사항을 쉽게 떠올릴 수 있다. 처음부터 모든 경우를 명확하게 나열할 수 있다면 좋지만 현실적으로 변경 사항이나 버그가 나올 때마다 추가하며 더욱 명확해지도록 만드는 것이 좋다.</li>\n</ol>\n<p>TDD 가 좋은 개발 방법론 중 하나라는 것은 초짜인 저도 많이 들었던 내용이지만, 매번 테스트 한줄이라도 작성하려 하면 너무 어렵게 느껴지고 여러 가지 핑계로 제대로 도입을 하지 못하고 있었습니다. 이번에 접한 조언을 계기로 테스트 작성에 더 익숙해지면서 더 좋은 코드를 작성하고 싶습니다.</p>\n<p>자바스크립트 기본적인 문법에 익숙하신 분이라면 <a href="https://github.com/dwyl/learn-tdd">이 글</a>과 함께 TDD를 도전해보셔도 괜찮아 보입니다.</p>',id:"/Users/rinae/Dev/blog/src/pages/posts/2017-11-04-tdd-practice-tips/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2017-11-04",path:"/posts/tdd-practice-tips",title:"TDD(Test Driven Development) 를 연습하면서 참고하기 좋은 팁 10가지",tags:["TDD","Testing"],category:"TDD"}},{excerpt:"이 번역글은  Justin Weiss의 포스팅 을 번역한 글입니다 오류 지적 및 피드백은 언제나 환영합니다. 댓글이나 메일로 알려주세요 당신은 자신이 만든 앱을 보고 매우 흥분한 상태이다. 한가지 문제가 있다는 점만 빼고 - 테스트를 전혀 작성하지 않았다는 점 말이다. 당신은 TDD(Test-Driven Development…",html:'<ul>\n<li><strong>이 번역글은 <a href="http://www.justinweiss.com/articles/how-do-you-take-an-app-from-test-less-to-tdd/">Justin Weiss의 포스팅</a>을 번역한 글입니다</strong></li>\n<li><strong>오류 지적 및 피드백은 언제나 환영합니다. 댓글이나 메일로 알려주세요</strong></li>\n</ul>\n<hr>\n<p>당신은 자신이 만든 앱을 보고 매우 흥분한 상태이다. 한가지 문제가 있다는 점만 빼고 - 테스트를 전혀 작성하지 않았다는 점 말이다. 당신은 TDD(Test-Driven Development) 방법론을 적용하여 코드를 쓰고 싶었지만, 어디부터 시작해야 할지 전혀 몰라서 막혀버렸다. 어디부터 시작해야 할 것인가? <strong>어떻게 하면 테스트가 없는 앱을 가지고 TDD를 이용한 앱을 작성할 수 있을까?</strong></p>\n<h2 id="이미-작성한-코드를-테스트하라"><a href="#%EC%9D%B4%EB%AF%B8-%EC%9E%91%EC%84%B1%ED%95%9C-%EC%BD%94%EB%93%9C%EB%A5%BC-%ED%85%8C%EC%8A%A4%ED%8A%B8%ED%95%98%EB%9D%BC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>이미 작성한 코드를 테스트하라</h2>\n<p>당신은 테스트가 없는 코드 뭉치를 가지고 있다. 그렇다고 <em>당장</em> 기존의 코드를 가지고 테스트를 작성할 수 없다는 뜻은 아니다. 이미 가지고 있는 코드를 테스트하는 것 부터 시작해보라. 기대하던대로 코드가 작동하는지 확인해보는 것이다.</p>\n<p>이건 TDD가 아니다. <strong>그러나 이미 존재하는 코드를 테스팅하는 것은 TDD를 배우는데 도움을 줄 것이다.</strong></p>\n<ul>\n<li>\n<p><strong>예외적인 경우나 에러가 발생하는 조건에 대해 생각하는 연습을 하게 된다</strong></p>\n<p>모든 가능한 입력을 테스트하느라 수 년을 허비하지 않고 테스트를 작성하기 위해서, 당신은 보통 코드의 어느 부분에서 문제가 발생하는지 생각해야 한다. 만약 문자열을 받는 메서드를 테스트한다고 할 때, 대신 심볼을 넣으면 어떤 일이 생길 것인가?  <code>nil</code> 을 넣는다면? 혹은 숫자를 나누는 함수를 테스트한다면, 0을 입력하는 경우에 대한 테스트를 하는 것이 좋다. 하지만 아마 1과 2를 테스트 할 필요는 없을 것이다.</p>\n<p>당신은 충분한 테스트를 작성한 뒤에 메서드의 어느 부분에서 문제가 발생할지 예측하기 시작할 것이다. 그리고 한번 TDD를 시작하면 이 기술을 이용하여 탄탄한 테스트를 작성할 수 있을 것이다. 이 테스트들은 예외 사항들을 더욱 잘 처리하도록 코드를 강제하는 역할을 한다. </p>\n</li>\n<li>\n<p><strong>짜임새있는 테스트를 작성하는 연습을 하게 된다</strong></p>\n<p>이미 작성한 코드에 대한 테스트를 작성한다면, 이 테스트들을 <a href="https://www.justinweiss.com/articles/writing-better-tests-with-the-three-phase-pattern//">구조화하는 다른 패턴들</a>을 시도해볼 수도 있다. 테스트하고자 하는 코드는 이미 있다. 그러니 당신은 테스트 자체, 그리고 이 테스트가 어떤 식으로 작성되어야 하는지에 대해 집중할 수 있다. 그리고 한번 몇몇 좋은 패턴들을 익히고 나면 당신이 기댈 코드가 <em>없을</em> 때에도 더 좋은 테스트를 작성할 것이다.</p>\n</li>\n<li>\n<p><strong>코드를 테스트하기 힘들게 하는 요소들을 발견하게 된다</strong></p>\n<p>테스트들을 작성할 수록 점점 시스템 어느 부분이 테스트하기 제일 어려운지 느끼게 될 것이다. 그런 부분들을 알아차리게 되면 그 부분을 리팩터링이 필요한 부분이라고 표시해둘 수 있다. 더 나아가 처음부터 더욱 테스트하기 좋은 코드를 작성하기 시작할 것이다.</p>\n<p>테스트하기 좋은 코드가 어떤 식으로 생겼는지 알기 시작하면, 그 지식을 기반으로 TDD하기 쉬운 API를 개발할 수 있으며 더욱 빨리 앱을 개발할 수 있을 것이다.</p>\n</li>\n</ul>\n<h2 id="tdd에-익숙해지기ease-into-tdd"><a href="#tdd%EC%97%90-%EC%9D%B5%EC%88%99%ED%95%B4%EC%A7%80%EA%B8%B0ease-into-tdd" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TDD에 익숙해지기(Ease into TDD)</h2>\n<p>\'테스트를 나중에\' 기법을 TDD를 배우는데 도움이 되는 기술로 사용할 수 있다. 하지만 여전히 당신 앱의 일부에 TDD를 적용하고 싶을 것이다.<em>(역주: 테스트를 먼저 작성하고 기능을 개발하는 것을 의미하는 것이라 추정합니다)</em> <strong>그리고 기존의 코드를 가지고 TDD에 익숙해지는 간단한 방법이 있다: <a href="https://ko.wikipedia.org/wiki/%ED%9A%8C%EA%B7%80_%ED%85%8C%EC%8A%A4%ED%8A%B8">회귀 테스트를 작성하는 것이다</a></strong></p>\n<p>회귀 테스트는 이미 확정한 코드를 부수는 것을 억누른다. 아이디어 자체는 아주 간단하다. 당신이 버그를 발견할 때마다, 그 버그를 다시 만들어보기 위해 브라우저에서 여기저기 클릭해보는 대신에:</p>\n<ul>\n<li>버그를 재생성하기 위해 <strong>실패하는 테스트를 작성하라.</strong></li>\n<li><strong>테스트를 실행하라,</strong> 그리고 그 테스트가 확실히 실패하는지 확인하라 (왜냐면 버그는 아직 존재하니까).</li>\n<li>가능한한 가장 간단한 방법으로 <strong>버그를 수정하라.</strong></li>\n<li><strong>테스트를 실행하라,</strong> 그리고 테스트가 통과하는지 확인하라.</li>\n<li>만약 필요하다면 당신이 수정한 방법을 <strong>리팩터링하라.</strong></li>\n</ul>\n<p>이 방법은 새 시스템을 밑바닥부터 TDD로 개발하는 것 보단 훨씬 쉽다. 왜냐면 이미 작성된 코드를 단지 테스트 주도적으로 바꾸기만 하는 것이기 때문이다. 그리고 "Red, Green, Refactor" 라는 TDD의 핵심적인 루프를 습관화하게 된다. <strong>그리고 이쯤부터 당신의 TDD는 테스트가 없는 상태에서 바로 TDD로 개발하는 것에 가까워지게 된다.(And from here, TDD is a shorter step away than trying to go straight to TDD from no tests.)</strong></p>\n<h2 id="테스트가-없는-상태에서-tdd로"><a href="#%ED%85%8C%EC%8A%A4%ED%8A%B8%EA%B0%80-%EC%97%86%EB%8A%94-%EC%83%81%ED%83%9C%EC%97%90%EC%84%9C-tdd%EB%A1%9C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>테스트가 없는 상태에서 TDD로</h2>\n<p>테스트가 없는 앱은 그렇게 나쁜 출발점은 아니다. 이미 작성된 코드를 테스트할 때, 당신은 좋은 TDD 테스트를 작성하기 위해 무엇이 필요한지 많이 배우게 될 것이다. \'테스트를 나중에\' 하는 것은 시작부터 TDD로 개발하는 것 보다 쉽다. 왜냐면 아직 어떻게 디자인해야할지 모르는 API들을 상상할 필요가 없기 때문이다. 그리고 자신의 앱에 한번 TDD를 도입하기로 결정했다면 회귀 테스트를 통해 익숙해질 수 있다.</p>\n<p>그러니 만약 당신이 상상하고 있는 시스템에 TDD를 어떻게 도입해야 할 지 모르겠다면, 계속 테스트를 작성하라. 비록 코드를 먼저 써야 하더라도 말이다.</p>\n<hr>\n<h2 id="번역-후기"><a href="#%EB%B2%88%EC%97%AD-%ED%9B%84%EA%B8%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>번역 후기</h2>\n<p>2017년 첫 번역은 TDD에 관한 글입니다. TDD 혹은 BDD(Behavior Driven Development)가 개발 방법론에 있어서 절대적인 진리는 아닐 겁니다. 다만 많이 권장되는데는 이유가 있겠지요. 저는 간단하게 TDD가 확장성, 유지보수성에 큰 도움이 된다고 인지하고 있습니다.</p>\n<p>제 자신도 아직 실력이 미천하여 코드 없이 테스트를 작성한다는 것에 큰 두려움을 느끼면서 지내왔습니다. 최근에야 일부 기능에 대해 예측되는 결과를 먼저 테스트로 작성하고, 이후에 실제 기능을 작성하여 잘 작동하는지 확인하는 수준에 불과합니다.</p>\n<p>그러다가 마침 기존에 작성한 코드를 이용하여 TDD를 배워나가는 과정에 대해 간단한 포스팅이 있어 이렇게 소개를 하게 되었습니다. 음.. 당장은 기존의 코드를 이용하여 테스트를 작성하는게 꽤 부끄럽지만 (왜냐면 테스트를 작성할 것도 없이 손대야 할 부분들이 수두룩하게 보이니까요) 이런 방식으로 약간 우회하여 TDD를 습득하는 방법도 있겠지요. </p>\n<p>그럼 모두 2017년 한해에도 좋은 테스트 + 테스트를 통과하는 좋은 코드 작성이 잘 되시길 바랍니다 :)</p>\n<p>(추가) 피드백에 의해 \'You\' 라는 단어의 직역이 너무 많이 들어간 것 같아 조금 수정하였습니다. 확실히 번역할 때 \'당신\' 이라는 단어가 일일이 들어갈 필요는 없겠네요. 좋은 피드백을 주신 <a href="https://twitter.com/initnirvana">@initNirvana</a> 님께 감사드립니다.</p>',id:"/Users/rinae/Dev/blog/src/pages/posts/2017-01-16-how-do-you-take-an-app-from-no-tests-to-tdd-kor/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2017-01-16",path:"/posts/how-do-you-take-an-app-from-no-tests-to-tdd-kor",title:"[번역] 테스트가 없는 앱을 이용하여 TDD를 배우는 방법",tags:["Ruby","Testing"],category:"Translation"}},{excerpt:"본 포스트는  Luca Guidi의 포스팅을  번역한 글입니다 문제를 설명하는데 나온 하나미(Hanami…",html:'<ul>\n<li><strong>본 포스트는 <a href="https://lucaguidi.com/2016/12/27/isolate-global-state.html">Luca Guidi의 포스팅을</a> 번역한 글입니다</strong></li>\n<li><strong>문제를 설명하는데 나온 하나미(Hanami)에 대해서는 <a href="https://emaren84.github.io/blog/archivers/hanami-introduction">이 포스팅</a>을 참조해주세요</strong></li>\n<li><strong>전문 번역이 아니기에 부족한 표현이나 오역은 언제든지 지적해주세요</strong></li>\n</ul>\n<hr>\n<p>소프트웨어 프로그램에서 전역 상태를 사용하는건 개발하기엔 쉽지만 유지보수 할 때는 악몽이 된다. 예상치 못한 상황에서 발생하여 추적하기도 어려운 버그가 되기 쉽상이다.</p>\n<p>왜 그렇게 되는지, 그리고 어떻게 그 문제를 완화할 수 있을지 살펴보자.</p>\n<p><em>역주: 이 글에서 전역 상태는 전역 변수와 거의 동일한 의미로 사용되는 것으로 추정됩니다.</em></p>\n<h2 id="문제의-예시"><a href="#%EB%AC%B8%EC%A0%9C%EC%9D%98-%EC%98%88%EC%8B%9C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>문제의 예시</h2>\n<p>예를 들자면 하나미의 코드 베이스 안에서 우리는 환경 변수에 따라 어떻게 프레임워크가 설정되는지 테스트 할 필요가 있다.</p>\n<p>우리<em>(역주: 하나미 개발팀으로 보입니다)</em>는 보통 테스트를 이런 식으로 작성한다:</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token constant">RSpec</span><span class="token punctuation">.</span>describe <span class="token constant">Hanami</span><span class="token punctuation">:</span><span class="token symbol">:Environment</span> <span class="token keyword">do</span>\n  before <span class="token keyword">do</span>\n    <span class="token constant">ENV</span><span class="token punctuation">[</span><span class="token string">\'HANAMI_ENV\'</span><span class="token punctuation">]</span>  <span class="token operator">=</span> <span class="token keyword">nil</span>\n    <span class="token constant">ENV</span><span class="token punctuation">[</span><span class="token string">\'RACK_ENV\'</span><span class="token punctuation">]</span>    <span class="token operator">=</span> <span class="token keyword">nil</span>\n    <span class="token constant">ENV</span><span class="token punctuation">[</span><span class="token string">\'HANAMI_HOST\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">nil</span>\n    <span class="token constant">ENV</span><span class="token punctuation">[</span><span class="token string">\'HANAMI_PORT\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">nil</span>\n\n    <span class="token comment"># ...</span>\n  <span class="token keyword">end</span>\n\n  context <span class="token string">"when HANAMI_ENV is set"</span> <span class="token keyword">do</span>\n    before <span class="token keyword">do</span>\n      <span class="token constant">ENV</span><span class="token punctuation">[</span><span class="token string">\'HANAMI_ENV\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">\'production\'</span>\n      <span class="token variable">@env</span> <span class="token operator">=</span> described_class<span class="token punctuation">.</span><span class="token keyword">new</span>\n    <span class="token class-name">end</span>\n\n    <span class="token comment"># ...</span>\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<p>우리는 보통 각각의 테스트를 실행하기 전에 모든 환경 변수를 초기화해왔다. 그리고 우리가 필요로 하는 특별한 상황(the edge case)에서만 하나씩 설정했다.</p>\n<p>이러한 접근 방식을 사용할 때의 <strong>문제는</strong> 이 방법이 루비 프로세스의 전역 상태를 <strong>더럽힌다는</strong> 것이다. 우리가 테스트 파일을 단독으로 실행할 때는  <code>before</code> 블록이 환경 변수를 리셋하기 때문에 잘 작동한다.</p>\n<p>그러나 모든 테스트를 한번에 실행할 때, 테스트는 꼬이게 될 것이다. 환경 변수 초기화가 언제나 작동하진 않기 때문이다.</p>\n<p>만약 한 테스트가 <code>ENV</code> 속성을 변환하고 나서 뒷정리를 하지 않으면, 그 다음 테스트는 기존의 <code>ENV</code> 값의 변화를 <strong>물려받아서</strong> 우리가 기대하던대로 작동하지 않을 수 있다.</p>\n<p>때때로 위의 예시 처럼 눈에 띄는 부분에서 변화를 준 경우에는 우리가 <code>after</code> 블록을 설정하여 뒷정리를 할 수 있다. 그러나 다른 때엔 변환한 것(the mutation)이 우리 눈에 보이지 않는 부분에서 부작용을 초래할 수 있다.</p>\n<p>이건 소스의 버그다. 그리고 이 버그는 엉킨 실타래처럼 되어 디버그하기 힘들다.</p>\n<p><strong>오랜 시간동안, 여러 가지 전역 상태의 조합하는 것은 하나미를 지속적 통합 개발(<a href="https://ko.wikipedia.org/wiki/%EC%A7%80%EC%86%8D%EC%A0%81_%ED%86%B5%ED%95%A9">CI builds</a>)이 힘들도록 만들고 여러 버그를 일으켰다.</strong></p>\n<p>개발자로서의 내 경험으로 미루어보아(<em>역주: Luca Guidi는 숙련된 웹 개발자입니다</em>) 이런 형태의 문제를 완화할 수 있는 유일한 방법은 <strong>전역 상태를 격리하거나, 전역 상태를 사용하는 것을 아예 피하는 것이다.</strong> 우리는 <strong>가능한한 전역 상태를 사용하는 것을 줄이도록</strong> 하나미의 내부 구현을 바꾸고 있다.</p>\n<h2 id="문제의-해법"><a href="#%EB%AC%B8%EC%A0%9C%EC%9D%98-%ED%95%B4%EB%B2%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>문제의 해법</h2>\n<p>앞서 이야기한 특별한 경우를 위해 우리는 환경 변수를 격리할 수 있는 새로운 객체를 선보였다. 이는 <code>Hanami::Env</code> 라고 불린다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token keyword">module</span> <span class="token constant">Hanami</span>\n  <span class="token keyword">class</span> <span class="token class-name">Env</span>\n    <span class="token keyword">def</span> <span class="token function">initialize</span><span class="token punctuation">(</span>env<span class="token punctuation">:</span> <span class="token constant">ENV</span><span class="token punctuation">)</span>\n      <span class="token variable">@env</span> <span class="token operator">=</span> env\n    <span class="token keyword">end</span>\n\n    <span class="token keyword">def</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>\n      <span class="token variable">@env</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span>\n    <span class="token keyword">end</span>\n\n    <span class="token keyword">def</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>\n      <span class="token variable">@env</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value\n    <span class="token keyword">end</span>\n\n    <span class="token comment"># ...</span>\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<p>구현 자체는 별 것 아니다: <code>ENV</code> 에 접근하는 것을 캡슐화하는 것이다.</p>\n<p>우리는 환경 변수를 관리하기 위해 자체 인터페이스를 정의했다. 우리는 명시적인 구현(concrete implementation)을 사용하기보다(<code>ENV</code>) 추상화(<code>Hanami::Env</code>)에 의존하고 있다(<a href="https://ko.wikipedia.org/wiki/%EC%9D%98%EC%A1%B4%EA%B4%80%EA%B3%84_%EC%97%AD%EC%A0%84_%EC%9B%90%EC%B9%99">의존관계 역전 원칙 참고</a>). </p>\n<p><code>Hanami::Environment</code> 는 프로젝트의 환경 변수를 설정하는 책임을 가지고 있는데, 우리는 이런 방식으로 사용한다:</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token keyword">module</span> <span class="token constant">Hanami</span>\n  <span class="token keyword">class</span> <span class="token class-name">Environment</span>\n    <span class="token keyword">def</span> <span class="token function">initialize</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>\n      opts <span class="token operator">=</span> options<span class="token punctuation">.</span>to_h<span class="token punctuation">.</span>dup\n      <span class="token variable">@env</span> <span class="token operator">=</span> <span class="token constant">Hanami</span><span class="token punctuation">:</span><span class="token symbol">:Env</span><span class="token punctuation">.</span><span class="token keyword">new</span><span class="token punctuation">(</span>env<span class="token punctuation">:</span> opts<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token symbol">:env</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token constant">ENV</span><span class="token punctuation">)</span>\n\n      <span class="token comment"># ...</span>\n    <span class="token keyword">end</span>\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<p>우리가 하나미 프로젝트를 사용할 때, <code>:env</code> 옵션은 설정되지 않은 상태이다. 이로 인해 <code>@env</code> 는 <code>ENV</code> 를 참조하여 루비 프로세스의 진짜 환경 변수를 읽거나 쓰게 된다.</p>\n<p>이렇게 우리는 <code>Hanami::Environment</code> 의 테스트 중에 많은 양의 코드를 단순화하고, <strong>공유되고 변화 가능한 상태(shared mutable state, 즉 <code>ENV</code> 말이다)의 사용을 피할 수 있었다.</strong> 아래 코드에서 우리는 <code>ENV</code> 와 유사하게 동작하는 <code>:env</code> 를 객체의 옵션으로 전달하지만, 이 것은 실제로 <code>ENV</code>가 아니다: 그냥 <code>Hash</code> 이다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token constant">RSpec</span><span class="token punctuation">.</span>describe <span class="token constant">Hanami</span><span class="token punctuation">:</span><span class="token symbol">:Environment</span> <span class="token keyword">do</span>\n  context <span class="token string">"when HANAMI_ENV is set"</span> <span class="token keyword">do</span>\n    <span class="token function">let</span><span class="token punctuation">(</span><span class="token symbol">:env</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token builtin">Hash</span><span class="token punctuation">[</span><span class="token string">"HANAMI_ENV"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"production"</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n\n    it <span class="token string">"tests something interesting"</span>\n      <span class="token variable">@env</span> <span class="token operator">=</span> described_class<span class="token punctuation">.</span><span class="token keyword">new</span><span class="token punctuation">(</span>env<span class="token punctuation">:</span> env<span class="token punctuation">)</span>  \n    <span class="token keyword">end</span>\n\n    <span class="token comment"># ...</span>\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<h2 id="결론"><a href="#%EA%B2%B0%EB%A1%A0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>결론</h2>\n<p><a href="https://ko.wikipedia.org/wiki/%EC%BA%A1%EC%8A%90%ED%99%94">캡슐화</a>와 <a href="http://solnic.eu/2013/12/17/the-world-needs-another-post-about-dependency-injection-in-ruby.html">의존성 주입</a>을 적절하게 사용하여, 각각의 테스트에서 발생할 수 있는 변화는 나머지 테스트에서는 보이지 않게 되었다. 결과적으로 안정적인 테스트 수행을 할 수 있게 되었고, 하나미 내부를 <a href="https://ko.wikipedia.org/wiki/SOLID">SOLID 디자인</a>에 맞게 구성할 수 있었다. </p>\n<hr>\n<h2 id="번역-후기"><a href="#%EB%B2%88%EC%97%AD-%ED%9B%84%EA%B8%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>번역 후기</h2>\n<p>보통 루비 프로젝트에서 <code>dotenv</code> 같은 젬으로 환경 변수를 관리합니다. 사실 이 환경 변수라는 개념도 저에게 아직 모호한 개념이지만, 객체지향 프로그래밍의 핵심적인 주제인 캡슐화와 의존성 주입을 어떤 식으로 활용하는지 좋은 예를 보여준 것 같아 한번 번역해보게 되었습니다.</p>\n<p>특히 제가 요즘에야 테스트를 작성해보기 시작했는데, 테스트를 개별로 실행할 때는 몰라도 전체 테스트를 실행할 때 원인을 알 수 없는 오류가 생길 때가 종종 있었습니다. 이 글을 통해 약간의 힌트를 얻었다는 생각도 듭니다. </p>',id:"/Users/rinae/Dev/blog/src/pages/posts/2016-12-30-isolate-global-state-kor/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2016-12-30",path:"/posts/isolate-global-state-kor",title:"[번역] 전역 상태를 격리하라",tags:["Ruby","Hanami","Testing"],category:"Translation"}}],tagName:"Testing"}}}});
//# sourceMappingURL=path---tags-testing-bde2a09329bbe53f02d2.js.map