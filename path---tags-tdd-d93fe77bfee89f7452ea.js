webpackJsonp([0xa6e8db5d7759],{435:function(t,n){t.exports={pathContext:{postsByTag:[{excerpt:"이 글은 Twitter  @ageldama 님의 TDD 조언에 관한 글타래를 허락 받고 정리한 내용입니다. 정리하면서 말씀하신 의도가 약간 달라진 부분 혹은 제 지식이 부족하여 제대로 표현하지 못한 부분도 있을 수 있습니다. 피드백환영합니다. 해당 포스팅은  Medium…",html:'<p><img src="https://cdn-images-1.medium.com/max/1600/1*jFw7ZZMoVcsEYM_fS33DBA.gif"></p>\n<p>이 글은 Twitter <a href="https://twitter.com/ageldama">@ageldama</a>님의 TDD 조언에 관한 글타래를 허락 받고 정리한 내용입니다. 정리하면서 말씀하신 의도가 약간 달라진 부분 혹은 제 지식이 부족하여 제대로 표현하지 못한 부분도 있을 수 있습니다. 피드백환영합니다. 해당 포스팅은 <a href="https://medium.com/@devRinae/tdd-test-driven-development-%EB%A5%BC-%EC%97%B0%EC%8A%B5%ED%95%98%EB%A9%B4%EC%84%9C-%EC%B0%B8%EA%B3%A0%ED%95%98%EA%B8%B0-%EC%A2%8B%EC%9D%80-%ED%8C%81-10%EA%B0%80%EC%A7%80-d8cf46ae1806">Medium에 먼저 발행되었으니</a> 댓글로 의견 공유 부탁드립니다.</p>\n<p><strong>(번호가 중요도 혹은 순서를 나타내지 않습니다)</strong></p>\n<ol>\n<li><strong>유닛 테스트를 한다면 테스트할 주제와 대상 클래스를 정하고, 대상 클래스가 사용하는 의존성(패키지일 수도 있고 특정 함수일 수도있겠지요)들은 Mock이나 Stub으로 만든다.</strong> <a href="https://stackoverflow.com/questions/3459287/whats-the-difference-between-a-mock-stub">(Mock과 Stub이란?)</a> Mocking을 어떻게 하는지는 사용하는 언어마다 주로 사용하는 테스팅 프레임워크의 레퍼런스를 참고하라. 그러고 나면 자신이 의존성을 잘 정리했는지 살펴보기 좋아지고, 이어서 테스트하기 좋은 형태가 눈에 들어오기 시작한다.</li>\n<li><strong>무엇을 테스트할지 정하기 어렵다면?</strong> 단위 테스트를 예로 들면 자신이 만든 클래스나 모듈, 함수 등의 기능이 정상적으로 동작하는지 확인하기 위해 테스트를 작성한다고 생각해보라.</li>\n<li><strong>Q: 테스트를 작성하는데 “망했다” 혹은 “잘못되었다” 는 느낌이 든다. / A:</strong> 오히려 좋은 징조인데, 당신이 작성한 테스트는 리팩토링 및 회귀 테스트 시 복구해야 할 곳이 있음을 보여주고, 제대로 복구하고 있다는 지침이 된다.</li>\n<li>처음에는 작성한 모듈이나 클래스 비율이 높게 테스트를 짜는데, 단언(assertions)은 조금 엉성하더라도 기본적인 부분만 확인하도록 작성한다. 이후 리팩토링을 하면서 다양한 경우에 대응하기 위해 단계적으로 단언을 추가한다.</li>\n<li><strong>원칙적으로 TDD인만큼</strong> 테스트를 먼저 스펙에 반영해 작성하고, 그에 따라 테스트를 충족하기 위해 코드를 작성 후 리팩토링 하는 것이 바람직하지만 <strong>실제로는 쉽지 않다</strong>. 초심자라면 코드를 어느 정도 수준까지 짜 놓고 테스트, Mock을 붙이는걸 권한다. — <a href="https://emaren84.github.io/posts/how-do-you-take-an-app-from-no-tests-to-tdd-kor">참고 포스트</a></li>\n<li>처음부터 Mocking을 하지 않아도 좋다. 입력과 기대값이 명확하게 나타나는 로직 부분일수록, 또한 다른 모듈이나 DB 등 외부 시스템과 연결이 없을 수록 테스트를 작성하기 쉽고 그 효과를 체감하기 쉽다.</li>\n<li><strong>가장 중요한 것은 테스트가 다 붙은 상황에서 리팩토링을 시작하는 것이다.</strong> 테스트가 깨지는 것을 보고 코드와 테스트를 계속 수정해나가면서 연습해보면 <strong>“테스트 먼저”</strong>를 어떻게 하게 되는지 자연스럽게 익히게 된다.</li>\n<li><strong>Q: E2E(End-to-End) 과정을 생각해서 하나씩 시나리오대로 테스트를 짜는 것이 좋지 않나? / A:</strong> 맨 처음 스펙 도출 이후 테스트 작성, 단언, Mocking 등 순차적으로 내려가는 것이 좋겠지만, 일반적인 테스팅 프레임워크를 적용해서 작은 단위로 테스트를 작성해야 단순하고 쉽게 접근할 수 있기 때문에 개별 모듈별로 먼저 단위 테스트를 시도해 보는 것을 권장한다.</li>\n<li><strong>UI를 테스트할 때는 다른 테스팅 기법과 도구들이 잘 맞을 수도 있다.</strong> 하지만 UI 테스트나 일반 테스트 모두 공통적으로 테스트를 <strong>어떻게든</strong> 만들기 위해 노력하고, 테스트 기법 및 테스트에 맞게 자신의 코드를 생각해야 한다.</li>\n<li><strong>테스트 커버리지는 모듈 단위로, 단언은 세세하게.</strong> 테스트하고자 하는 모듈의 테스트 골격을 먼저 잡아 놓으면, 이를 기반으로 더 세세한 고려 사항을 쉽게 떠올릴 수 있다. 처음부터 모든 경우를 명확하게 나열할 수 있다면 좋지만 현실적으로 변경 사항이나 버그가 나올 때마다 추가하며 더욱 명확해지도록 만드는 것이 좋다.</li>\n</ol>\n<p>TDD 가 좋은 개발 방법론 중 하나라는 것은 초짜인 저도 많이 들었던 내용이지만, 매번 테스트 한줄이라도 작성하려 하면 너무 어렵게 느껴지고 여러 가지 핑계로 제대로 도입을 하지 못하고 있었습니다. 이번에 접한 조언을 계기로 테스트 작성에 더 익숙해지면서 더 좋은 코드를 작성하고 싶습니다.</p>\n<p>자바스크립트 기본적인 문법에 익숙하신 분이라면 <a href="https://github.com/dwyl/learn-tdd">이 글</a>과 함께 TDD를 도전해보셔도 괜찮아 보입니다.</p>',id:"/Users/rinae/Dev/blog/src/pages/posts/2017-11-04-tdd-practice-tips/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2017-11-04",path:"/posts/tdd-practice-tips",title:"TDD(Test Driven Development) 를 연습하면서 참고하기 좋은 팁 10가지",tags:["TDD","Testing"],category:"TDD"}}],tagName:"TDD"}}}});
//# sourceMappingURL=path---tags-tdd-d93fe77bfee89f7452ea.js.map