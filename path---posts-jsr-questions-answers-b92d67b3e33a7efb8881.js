webpackJsonp([86300170773855],{404:function(e,l){e.exports={data:{markdownRemark:{html:'<p><a href="/posts/javascript-roadmap-questions">앞서 제시된 질문들</a></p>\n<p>질문을 번역한 이후 따로 공부를 위해 가볍게 온라인 스터디를 진행하여 서로 조사한 부분을 이야기하고, 참고할만한 링크가 있다면 첨부하는 형식의 스터디를 진행하였습니다.</p>\n<p>작성된 내용 중에 오답이 있을 수도 있으니 참고용으로 봐 주시기 바라며, 보충 설명 혹은 수정을 요청하시려면 하단 프로필의 이메일로 요청 부탁드립니다. (중복된 문제에 대한 답안은 작성하지 않았습니다.)</p>\n<h2 id="baby-phase"><a href="#baby-phase" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Baby phase</h2>\n<ol>\n<li>\n<p>자바스크립트의 6가지 기본(원시) 타입은? (ES6에서 한개 더 늘어나서 총 여섯개입니다)</p>\n<ul>\n<li><code>Null</code>, <code>Number</code>, <code>Boolean</code>, <code>String</code>, <code>Undefined</code>, <code>Symbol</code></li>\n</ul>\n</li>\n<li>\n<p>자바스크립트에서 변수를 선언하고 할당하는 방법은?</p>\n<ul>\n<li><code>const</code>, <code>let</code>, <code>var</code> 를 쓰고 한칸 뒤에 변수명 선언, 할당은 <code>=</code> 를 선언한 변수 뒤에 붙이고 필요한 값을 넣는다.</li>\n</ul>\n</li>\n<li>\n<p><code>const</code>, <code>let</code>, <code>var</code> 로 변수를 선언할 때의 차이점은?</p>\n<ul>\n<li><code>const</code> - 재할당 불가능한 변수 선언. 블록 단위 스코프</li>\n<li><code>let</code> - 재할당 가능한 변수를 선언. 블록 단위 스코프</li>\n<li><code>var</code> - 자바스크립트 초기부터 변수를 선언하는 방법. 재할당 가능하며 함수 단위 스코프를 가짐</li>\n</ul>\n</li>\n<li>\n<p>아래의 연산자는 어떤 역할을 하는가?</p>\n<ol>\n<li><code>+</code></li>\n<li><code>-</code></li>\n<li><code>*</code></li>\n<li><code>/</code></li>\n<li><code>%</code></li>\n</ol>\n</li>\n<li>\n<p>아래의 비교연산자의 역할은?</p>\n<ol>\n<li><code>===</code></li>\n<li><code>!==</code></li>\n<li><code>></code></li>\n<li><code>>=</code></li>\n<li><code>&#x3C;</code></li>\n<li><code>&#x3C;=</code></li>\n</ol>\n</li>\n<li>\n<p>다음의 조건문은 어떻게 사용하는가?</p>\n<ol>\n<li><code>if</code></li>\n<li><code>if else</code></li>\n<li><code>else</code></li>\n</ol>\n</li>\n<li>\n<p><code>for</code> 루프를 사용하는 방법은?</p>\n<ul>\n<li><code>for (let i; i &#x3C; array.length; i++) {}</code></li>\n<li><code>for in</code>, <code>for of(ES6)</code>, <code>array.forEach</code></li>\n</ul>\n</li>\n<li>\n<p><strong>배열(Array)</strong>은 무엇인가?: 순서가 있는 데이터의 집합, 0부터 시작하는 인덱스</p>\n<ol>\n<li>배열에 값을 넣는 방법은? - <code>array.push</code></li>\n<li>배열의 값을 불러오는 방법은? - <code>[]</code>, <code>array.indexOf</code></li>\n<li>배열의 값을 제거하는 방법은? - <code>array.pop</code>, <code>array.shift</code>, <code>array.splice</code></li>\n<li>배열의 모든 값을 순회하는 방법은? - <code>array.forEach</code></li>\n</ol>\n</li>\n<li>\n<p><strong>객체(Object)</strong>란 무엇인가?: 프로퍼티(속성, key)를 가지고 <strong>순서가 없는</strong> 데이터의 집합</p>\n<ol>\n<li>객체에 값을 넣는 방법은?: <code>obj[\'prop\'] = value</code>, <code>obj.prop = value</code></li>\n<li>객체의 값을 불러오는 방법은?: <code>obj[\'prop\']</code>, <code>obj.prop</code></li>\n<li>객체의 속성을 제거하는 방법은?: <code>delete</code></li>\n<li>객체의 모든 값을 순회하는 방법은?: <code>for in</code>, <code>Object.keys(obj).forEach(prop => obj[prop])</code></li>\n<li>객체의 메서드(method)란 무엇인가?: 객체의 프로퍼티가 함수인 것 -> 객체의 기능(행동)을 정의한 것</li>\n<li>\n<p>메서드를 정의하는 방법은?</p>\n<ul>\n<li>객체의 프로퍼티를 함수로 정의</li>\n<li><code>const obj = { method() {} }</code></li>\n</ul>\n</li>\n<li>메서드를 호출/실행하는 방법은?: 객체의 값을 불러오면서 <code>()</code> 괄호를 붙여준다. 인자가 필요하다면 괄호 안에 인자를 넣는다.</li>\n</ol>\n</li>\n<li>\n<p><strong>함수(Function)</strong>란 무엇인가?: 하나의 단위로 실행되는 코드의 집합</p>\n<ol>\n<li>\n<p>함수를 정의하는 방법은?</p>\n<ul>\n<li>일반 함수 정의: <code>function func() {}</code></li>\n<li>변수에 함수 할당: <code>const func = () => {}</code></li>\n</ul>\n</li>\n<li>함수를 호출/실행하는 방법은?: 정의한 함수명 끝에 괄호<code>()</code>를 붙인다.</li>\n<li>\n<p>함수에 인수(arguments)를 전달하는 방법은?: 함수를 호출할 때 괄호 안에 인자를 쉼표로 구분지어 전달한다.</p>\n<ul>\n<li>함수를 호출할 때 - 인수(arguments)</li>\n<li>함수 안으로 넘겨진 것 - 매개변수(parameters)</li>\n</ul>\n</li>\n<li>함수 안에서 <code>return</code> 키워드는 어떤 역할을 하는가?: 함수를 즉시 종료하고 값을 반환한다. 이 값은 함수 호출의 값이 된다.</li>\n</ol>\n</li>\n</ol>\n<h2 id="child-phase"><a href="#child-phase" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Child phase</h2>\n<ol>\n<li>\n<p>자바스크립트의 스코프(Scope)란?: 현재 접근할 수 있는 변수들의 범위</p>\n<ol>\n<li>\n<p>왜 전역 변수를 최소화해야 하는가?</p>\n<ul>\n<li>소스와 데이터가 외부에 쉽게 노출된다</li>\n<li>비동기 로직의 구현을 용이하게 하고 잘 구분되게 한다. 비동기 로직을 실행하기 위한 변수가 글로벌에 있을 시 예상치 못한 동작이 발생할 우려가 있다.</li>\n<li>다양한 사양의 브라우징 환경에서 미리 정의된 글로벌 변수가 많을 수록 퍼포먼스에 영향을 미치게 된다.</li>\n</ul>\n</li>\n<li>\n<p>클로저(Closure)란 무엇인가?: 특정 함수가 참조하는 변수들은 선언된 환경을 계속 유지하는데, 이 함수와 스코프를 묶어서 클로저라고 한다.</p>\n<ul>\n<li><a href="http://unikys.tistory.com/309">Unikys :: 속깊은 자바스크립트 강좌 Closure 쉽게 이해하기/실용 예제 소스</a></li>\n</ul>\n</li>\n<li>\n<p>클로저를 왜 사용하는가?</p>\n<ul>\n<li>(옛날) 자바스크립트의 스코프 문제를 해결하기 위한 방법 중 하나</li>\n<li>private 변수를 활용해야 할 때 사용</li>\n<li>별도의 스코프를 가지지만 로직은 공유하는 객체를 생성</li>\n<li>반복적으로 같은 작업을 할 때, 같은 초기화 작업이 지속적으로 필요할 때, 콜백 함수에 동적인 데이터를 넘겨주고 싶을 때 활용</li>\n</ul>\n</li>\n</ol>\n</li>\n<li>\n<p>콜백이란 무엇인가?: 함수에 인자로 전달하는 함수로 <strong>함수를 실행한 뒤에</strong> 실행하기 위해 사용</p>\n<ol>\n<li>\n<p>콜백을 어떻게 사용하는가?</p>\n<ul>\n<li>인자로 콜백(혹은 함수)를 받는 함수에 콜백 함수를 전달</li>\n</ul>\n</li>\n<li>\n<p>콜백을 어떻게 작성하는가?</p>\n<ul>\n<li>그냥 함수를 작성한다. 인자가 필요하면 인자를 넣고.</li>\n</ul>\n</li>\n<li>\n<p>콜백을 받아들이는 함수를 작성하는 방법은?</p>\n<ul>\n<li>함수를 작성하되, 인자로 함수를 받도록 하고 특정 시점에서 인자로 받은 함수를 실행한다.</li>\n<li><code>fn</code> 을 인자로 받았으면 <code>fn()</code></li>\n</ul>\n</li>\n<li><code>setTimeout</code> 은 콜백을 받는 함수인가?: Yes</li>\n</ol>\n</li>\n<li>\n<p>비동기 자바스크립트</p>\n<ol>\n<li>\n<p>자바스크립트에서 <strong>동기</strong>와 <strong>비동기</strong>의 의미는 무엇인가?</p>\n<ul>\n<li>동기: 앞서 실행되고있는 작업이 끝날때까지 대기하고 다음 작업을 실행한다.</li>\n<li>비동기: 특정 작업이 실행되는데 시간이 더 걸린다면 나머지 작업을 먼저 수행하고, 그 특정 작업이 끝난 시점에 후속 처리를 한다.</li>\n</ul>\n</li>\n<li>\n<p>자바스크립트로 <strong>비동기</strong> 코드를 작성하는 방법은?</p>\n<ul>\n<li><code>setTimeout</code></li>\n<li>Promise</li>\n<li>async - await</li>\n<li>Generators</li>\n</ul>\n</li>\n<li>이벤트 루프가 무엇인가?: 비동기 자바스크립트 이벤트가 처리되는 과정</li>\n<li>이벤트 루프가 어떻게 동작하는가?: (브라우저의 경우) 콜스택에서 비동기 함수 호출 -> Web APIs에서 실행 완료를 대기 -> 콜백은 이벤트 큐에서 실행을 대기 -> 콜스택이 비면 실행 대기중인 이벤트 큐 가장 앞에 있는 콜백이 실행</li>\n</ol>\n</li>\n<li>\n<p>DOM 메서드에 관한 질문들</p>\n<ol>\n<li>엘리먼트(Element)란?: 페이지에서 HTML 태그로 나타나는 DOM 요소들</li>\n<li>노드(Node)란?: 위의 엘리먼트와 중복으로 사용되는 용어지만 정확히는 엘리먼트보다 넓은 범위를 나타낸다. DOM API를 실행하기 위한 인터페이스의 모음이기도 하다.</li>\n<li>\n<p>엘리먼트를 선택하는 방법은?</p>\n<ul>\n<li><code>document.querySelector</code>, <code>document.getElementBy</code></li>\n</ul>\n</li>\n<li>여러 엘리먼트를 선택하는 방법은?: <code>document.querySelectorAll</code></li>\n<li><strong>모든 브라우저</strong>에서 엘리먼트를 순회하는 방법은?: <code>document.createNodeIterator</code></li>\n<li>부모 엘리먼트를 선택하는 방법은?: <code>Node.parentNode</code></li>\n<li>형제 엘리먼트를 선택하는 방법은?: <code>Node.nextSibiling</code>, <code>Node.previousSibiling</code></li>\n<li>엘리먼트에 클래스를 추가/제거하는 방법은?: <code>element.classList.add</code></li>\n<li>엘리먼트에 특정 클래스가 있는지 확인하는 방법은?: <code>element.classList.contains</code></li>\n<li>어떤 상황에서 엘리먼트에 클래스를 추가하는가?: 특정 이벤트의 결과로 다른 스타일을 적용하고 싶을 때</li>\n<li>엘리먼트에 속성을 추가/제거하는 방법은?: <code>element.setAttribute</code>, <code>element.removeAttribute</code></li>\n<li>엘리먼트에 특정 속성이 있는지 확인하는 방법은?: <code>element.hasAttribute</code></li>\n<li>어떤 상황에서 엘리먼트에 속성을 추가/제거하는가?: 특정 엘리먼트에 <code>active</code>, 혹은 <code>disabled</code> 같은 속성을 부여해서 엘리먼트 사용 자체를 제어할 수 있다.</li>\n<li>HTML 엘리먼트를 자바스크립트로 생성하는 방법은?: <code>document.createElement</code></li>\n<li>특정 엘리먼트 바로 앞에 새로운 엘리먼트를 생성하는 방법은? <code>Node.appendChild</code></li>\n<li>엘리먼트의 스타일을 변경하는 방법은?: <code>HTMLElement.style</code></li>\n<li>엘리먼트의 스타일을 자바스크립트로 바꾸어도 되는가? 왜 되는가/되지 않는가?: 그닥 권장하지 않는다. 자바스크립트로 스타일은 변경하는 경우 무조건 인라인 스타일로 지정되게 되는데 이러면 최상위 우선권을 갖기 때문에 기존에 지정된 CSS가 모두 제 기능을 못하는 경우가 생긴다.</li>\n<li>엘리먼트의 내용을 가져오는 방법은?: <code>Node.textContent</code>, <code>element.innerHTML</code></li>\n</ol>\n</li>\n<li>\n<p>이벤트</p>\n<ol>\n<li>이벤트 리스너(Event listener)를 추가하는 방법은?: <code>element.addEventListener</code></li>\n<li>왜 이벤트 리스너를 추가하는가?: 정적 페이지만 보여주는 것이 아니라 DOM을 동적으로 제어 및 표현하기 위해</li>\n<li>이벤트 리스너를 제거하는 방법은?: <code>EventTarget(element).removeEventListener</code></li>\n<li>언제 이벤트 리스너를 제거하는가? 왜 제거하는가?: 특정 DOM 엘리먼트의 사용 주기가 이벤트 리스너와 다르다면 메모리 누수를 방지하기 위해 이벤트 리스너를 제거한다.</li>\n<li>자주 사용되는 마우스 이벤트의 종류는?: <code>click</code>, <code>mouseup</code>, <code>mousedown</code></li>\n<li>자주 사용되는 키보드 이벤트의 종류는?: <code>keydown</code>, <code>keyup</code></li>\n<li>자주 사용되는 폼(Form) 이벤트의 종류는?: <code>submit</code>, <code>reset</code></li>\n<li>이벤트 대상의 값을 가져오는 방법은?: <code>e.target.value</code></li>\n</ol>\n</li>\n</ol>\n<h2 id="teenage-phase"><a href="#teenage-phase" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Teenage phase</h2>\n<ol>\n<li>\n<p>OOP</p>\n<ol>\n<li>\n<p><code>this</code> 의 컨텍스트는 어떻게 바뀌는가? 얼마나 많은 컨텍스트가 있는가?</p>\n<ul>\n<li><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this">this - JavaScript | MDN</a></li>\n<li>함수가 호출되는 방법에 따라 결정된다.</li>\n<li>전역 컨텍스트: <code>window</code></li>\n<li>객체의 메서드일 경우: 바로 가까이 있는 객체에 바인딩됨. 즉 객체가 계층화되어있을 경우에 유의해야함.</li>\n<li>프로토타입 체인에서: 해당 객체의 인스턴스</li>\n<li><code>call</code>, <code>apply</code>, <code>bind</code> 로 임의의 컨텍스트 지정 가능</li>\n<li>이벤트 핸들러: 이벤트가 발생한 타겟 자체</li>\n<li>inline 이벤트 핸들러: 해당 DOM 엘리먼트</li>\n</ul>\n</li>\n<li>\n<p>자바스크립트의 <strong>프로토타입</strong>이란 무엇인가?: 특정 객체의 원형을 의미</p>\n<ul>\n<li><a href="http://meetup.toast.com/posts/104">쉽게 이해하는 자바스크립트 프로토타입 체인 : TOAST Meetup</a></li>\n<li><a href="http://insanehong.kr/post/javascript-prototype/">Javascript 기초 - Object prototype 이해하기 |  Insanehong’s Incorrect Note</a></li>\n</ul>\n</li>\n<li>\n<p>자바스크립트에서 객체를 생성하는 방법은?</p>\n<ul>\n<li><code>new</code> 생성자</li>\n<li><code>Object.create</code></li>\n<li><code>{}</code></li>\n</ul>\n</li>\n<li>\n<p>모듈 패턴은 무엇이며 어떻게 사용하는가?</p>\n<ul>\n<li>모듈 단위로 소스를 나누어 의존성 파악을 용이하게 함.</li>\n<li><a href="http://yubylab.tistory.com/entry/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4-for-javascript-Module-Pattern">디자인 패턴 for javascript Module Pattern :: Yuby’s Lab.</a></li>\n</ul>\n</li>\n<li>\n<p>팩토리 패턴은 무엇이며 어떻게 사용하는가?:  정해진 인자를 받아서 원하는 형태의 객체를 반환하는 패턴. 비슷한 객체를 반복해서 생성할 수 있도록 해 주며, 사용자가 구체적인 타입을 모르고도 객체를 생성할 수 있도록 해 준다.</p>\n<ul>\n<li><a href="https://joshua1988.github.io/web_dev/javascript-pattern-design/">Javascript Pattern 요약 - 디자인 패턴 • Captain Pangyo</a></li>\n</ul>\n</li>\n</ol>\n</li>\n<li>\n<p>함수형 프로그래밍</p>\n<ol>\n<li>불변성(Immutability)란 무엇인가?: 할당된 변수 혹은 값이 외부로 인해 변하지 않는 것 혹은 변하지 않도록 하는 것</li>\n<li>배열의 어떤 메서드가 불변성을 가지고 있는가?: <code>slice</code>, <code>map</code>, <code>concat</code>, <code>filter</code>, <code>reduce</code> ...</li>\n<li>자바스크립트의 객체를 직접 수정하지 않고 속성을 변경하는 방법은?: <code>Object.assign</code></li>\n<li>\n<p>순수 함수(Pure function)란?</p>\n<ul>\n<li>같은 값을 입력하면 같은 값이 출력되는 함수</li>\n<li>부작용(Side effects)를 일으키지 않는 함수</li>\n<li>외부 상태 변화에 기대지 않는 함수</li>\n</ul>\n</li>\n<li>한 개의 함수는 얼마나 많은 행동을 담고 있는게 좋은가?: <strong>Only One</strong></li>\n<li>함수의 부작용(Side effects)이란?: 의도하던 함수의 기능 외에 부가적인 작업이 발생하는 것. 주로 외부 상태를 변경하는 일을 이야기한다.</li>\n<li>순수 함수를 작성할 때 부작용을 다루는 방법은?: 불변성을 가진 함수를 사용하여 새로운 상태를 반환한다. / 모든 함수가 순수 함수가 되는것은 현실적으로 불가능하기 때문에 부작용을 다루는 함수는 구분해서 사용한다.</li>\n</ol>\n</li>\n<li>\n<p>AJAX</p>\n<ol>\n<li>\n<p>자바스크립트 프라미스(Promise)란?: 콜백 문제를 해결하기 위한 객체로, 프로미스 기반 비동기적 함수를 호출하면 <strong>성공</strong>혹은 <strong>실패</strong>가 발생하는 상황에 따라 이어서 처리할 수 있게 해준다.</p>\n<ul>\n<li><a href="https://engineering.huiseoul.com/async-vs-promise-11ea761a98c4">Async vs Promise</a></li>\n<li><a href="http://programmingsummaries.tistory.com/325">JavaScript 바보들을 위한 Promise 강의 - 도대체 Promise는 어떻게 쓰는거야? | 감성 프로그래밍</a></li>\n</ul>\n</li>\n<li>\n<p>프라미스를 연결하는 방법은?: 함수에서 Promise 인스턴스를 리턴한다. 그리고...</p>\n<ul>\n<li><code>.then()</code></li>\n<li><code>.catch()</code></li>\n</ul>\n</li>\n<li>\n<p>프라미스를 사용할 때 에러를 처리하는 방법은?: 프로미스 객체를 생성하고 그 안에서 <code>reject</code> 를 리턴하도록 한다.</p>\n<ul>\n<li><code>return reject(new Error(\'Error message\'))</code> => <code>.catch(err => {})</code></li>\n</ul>\n</li>\n<li>Fetch API를 사용하는 방법은?: <code>fetch(\'url\').then(result => result.json()).then(json => ...)</code></li>\n<li>CRUD란 무엇인가?: Create, Read, Update, Delete</li>\n<li>Github에서 자신의 저장소 목록을 가져오는 API를 어떻게 호출하는가?: <code>GET /user/repos</code></li>\n</ol>\n</li>\n<li>\n<p>Best practices</p>\n<ol>\n<li>전역 변수를 피해야 하는 이유는?</li>\n<li>비교 연산자에서 <code>==</code> 대신 <code>===</code> 를 사용해야 하는 이유는?:  <code>==</code> 는 자바스크립트 임의의 형 변환이 일어남</li>\n<li>간결한 코드를 작성하기 위해 삼항연산자를 어떻게 사용하는가?: <code>bool ? true : false</code></li>\n<li>간결한 코드 작성을 돕는 ES6 기능은 무엇이 있는가?: Arrow function, Class, Object destructuring, Spread operator …</li>\n<li>\n<p>이벤트 버블링/캡처링이란?</p>\n<ul>\n<li>버블링: 특정 DOM에서 이벤트가 발생하면 가장 하위 DOM부터 상위의 부모 DOM으로 한단계씩 전파되는 것.</li>\n<li>캡처링: 최상위 부모 DOM부터 가장 하위의 DOM까지 부모에서부터 전파되는 것</li>\n</ul>\n</li>\n<li>\n<p>이벤트 전달(delegate)이란?: 모든 DOM에 이벤트 리스너를 할당하기보다 하나의 부모 DOM에 이벤트 처리를 위임하도록 만드는 것</p>\n<ul>\n<li><a href="https://eclatant.github.io/2017-10-08/EventDelegation/">Javascript EventDelegation</a></li>\n</ul>\n</li>\n<li>이벤트 리스너를 제거하는 방법은? 언제 제거하는가?</li>\n</ol>\n</li>\n</ol>',frontmatter:{date:"2017/10/09",path:"/posts/jsr-questions-answers",title:"Javascript Roadmap Questions - 답안",tags:["Javascript"]}},site:{siteMetadata:{siteUrl:"https://emaren84.github.io",disqusShortUrl:"gatsby-blog-1"}}},pathContext:{}}}});
//# sourceMappingURL=path---posts-jsr-questions-answers-b92d67b3e33a7efb8881.js.map