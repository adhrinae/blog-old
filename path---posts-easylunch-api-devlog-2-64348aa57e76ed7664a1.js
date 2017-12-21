webpackJsonp([0x85f56a5bc3f4],{385:function(n,s){n.exports={data:{markdownRemark:{html:'<h2 id="members-구현"><a href="#members-%EA%B5%AC%ED%98%84" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Members 구현</h2>\n<p>이번엔 생성된 <code>MealMeetUp</code> 에 새로운 맴버를 추가하는 기능을 구현할 것이다.\n필요한 메서드는  <code>add_members</code> 하나 뿐이라 생각보다 복잡하진 않을 것이라 생각된다.</p>\n<p>먼저 Members 컨트롤러를 생성한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>rails g controller Members</code></pre>\n      </div>\n<p>그리고 routes.rb 파일에 api 경로를 추가해준다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code># routes.rb\n# ...\npost \'/members\' => \'members#add_member\', defaults: { format: \'json\' }</code></pre>\n      </div>\n<p>텅텅 빈 Members 컨트롤러에는 기본적으로 들어갈 메서드들이 있다.</p>\n<ul>\n<li>Strong parameters</li>\n<li>맴버들을 등록하기 위한 정보가 충분한지 검사</li>\n<li>기본적인 약속 (email, messenger) 정보가 제대로 작성되어 있는지 검사</li>\n<li>해당하는 <code>messenger_room_id</code> 의 검색</li>\n</ul>\n<p>사실 Strong parameters를 제외한 나머지 기능들은 기존에 <code>MealMeetUp</code> 을 구현할 때 만들었던 메서드들을 거의 그대로 써도 될 것이다.\n하지만 미묘한 차이가 있어서 지금은 새로 작성하고 나중에 리팩토링 할 때 합치기로 마음먹었다.</p>\n<p>작업을 하다보니 조금 애매하게 생각되는 부분이 \'멤버를 추가하면 DB에 어떻게 기록이 되어야 할까?\' 라는 부분이다.</p>\n<ol>\n<li>json으로 member_id를 받고, 그 아이디로 새로운 유저를 생성한다.</li>\n<li>그 유저에 해당하는 UserMessenger, UserLog를 생성한다.</li>\n<li>UserLog에 속하는 MealMeetUpTask를 생성한다.</li>\n<li>MealMeetUpTask의 meal<em>meet</em>up<em>id(외부키)는 현재 등록할 meal</em>meet_up으로 지정해준다.</li>\n</ol>\n<p>이렇게 하면 될 것 같은데, User의 컬럼을 <code>id(기본키) / email</code> 로 지정해둔게 걸린다. 보통 메신저에서 제공하는 user의 고유 식별 정보를 넣는데 써야 할 것 같은데, 슬랙의 경우엔 이메일이 아닌 듯 하여 아예 컬럼명을 수정해야겠다.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 790px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.52977571539057%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABpUlEQVQoz51S2U7CUBDl/7/DROP24L6gxhdN0ChbAAHpclt6u0jpCvTlOHeEBgyJiQ+nc+507ixnbmWxWEBhPp9jNpvBdUfwPA223YdhdIjrfP76kmXc6s62c6UoCphmE5+fNboUYTDYgWUdYDw+hBD7bG1b8RpUrLqk7IqvnxUqyiHECL6vIwwTSvwO3WgiCIaEQWmlJzBJEojxEJpWpSKPFHuN4fCKuYKUHz8dxnHOlSxrREFnEHYdCY0f53lpM7JhEMLR+ug8HWH0dgqjcQ6zeQHRumRIkog7jKKMtVDdqJEdp7ahD+ubU0I/xHQ63fCvc9ZQfaQMaGSPFuJQhz30+11K7pPPZxtFEbIwo0li5ivd1pex8lWKRYFO8wa6vks6HJRwnCPGZHICWzS4A5VQFXFdF2mabl9KHuUwWs+wX88wad8i7t0zko8HRL07hJ0qpNalp+Mxul06y3NCfWPk8tnktJCpqmqaCCwLnhAMX/GlL17qproyjDole6JOB9tHTsOUxm0Q6tSBsfHzt1Z/cU6YpRna7T1axjE94pd/JVz3fQPeCTpCtETYhQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="기존에 작성된 DB 다이어그램"\n        title=""\n        src="/static/2016-08-02-sc1-24c66a374eb8b785c331891b9eeaf950-ffc88.png"\n        srcset="/static/2016-08-02-sc1-24c66a374eb8b785c331891b9eeaf950-d16f8.png 198w,\n/static/2016-08-02-sc1-24c66a374eb8b785c331891b9eeaf950-f21b1.png 395w,\n/static/2016-08-02-sc1-24c66a374eb8b785c331891b9eeaf950-ffc88.png 790w,\n/static/2016-08-02-sc1-24c66a374eb8b785c331891b9eeaf950-81e7e.png 1185w,\n/static/2016-08-02-sc1-24c66a374eb8b785c331891b9eeaf950-14df9.png 1293w"\n        sizes="(max-width: 790px) 100vw, 790px"\n      />\n    </span>\n  </span>\n  </p>\n<hr>\n<p>슬랙에 팀원들의 의견을 물으니 UserMessenger 테이블에 email컬럼을 넣고, User의 email은 service_uid등으로 바꾸는게 좋겠다는 의견을 받았다.</p>\n<p>그렇게 생각하니 애매하게 보이던 맴버 추가 개념이 조금 명쾌해졌고, DB 컬럼을 먼저 수정해보기로 하였다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token keyword">class</span> <span class="token class-name">ChangeUserAndMessenger</span> <span class="token operator">&lt;</span> <span class="token constant">ActiveRecord</span><span class="token punctuation">:</span><span class="token symbol">:Migration</span>\n  <span class="token keyword">def</span> change\n    rename_column <span class="token symbol">:users</span><span class="token punctuation">,</span> <span class="token symbol">:email</span><span class="token punctuation">,</span> <span class="token symbol">:service_uid</span>\n    add_column <span class="token symbol">:user_messengers</span><span class="token punctuation">,</span> <span class="token symbol">:messenger_user_email</span><span class="token punctuation">,</span> <span class="token symbol">:string</span>\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<p>다시 맴버 추가 과정을 구성한다면</p>\n<ol>\n<li>json으로 넘어온 member_ids에서 하나하나씩 유저를 추가한다.</li>\n<li>유저에 해당하는 UserMessenger, UserLog를 생성한다. 만약 이메일이 있다면 이메일도 추가한다.(Optional)</li>\n<li>UserLog에 속하는 MealMeetUpTask를 생성한다.</li>\n<li>그리고 각 유저의 MealMeetUpTask는 현재 이용중인 MealMeetUp에 속하게 된다.</li>\n</ol>\n<p>조금 직관적인 느낌은 떨어지게 보인다. 바로 유저가 MealMeetUp이라는 그룹과 연결되는 것이 아니니까.\n맴버 추가 과정을 하나의 메서드화하고, 리스폰스로 생성할 json도 메서드로 한번에 만들도록 하였다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token keyword">class</span> <span class="token class-name">MembersController</span> <span class="token operator">&lt;</span> <span class="token constant">ApplicationController</span>\n<span class="token comment"># ...</span>\n\n <span class="token keyword">def</span> <span class="token function">add_flow</span><span class="token punctuation">(</span>member<span class="token punctuation">,</span> meetup<span class="token punctuation">)</span>\n      user <span class="token operator">=</span> <span class="token constant">User</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>service_uid<span class="token punctuation">:</span> member<span class="token punctuation">)</span>\n      user_log <span class="token operator">=</span> <span class="token constant">MealLog</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>user_id<span class="token punctuation">:</span> user<span class="token punctuation">.</span>id<span class="token punctuation">)</span>\n      <span class="token constant">UserMessenger</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>user_id<span class="token punctuation">:</span> user<span class="token punctuation">.</span>id<span class="token punctuation">,</span>\n                           messenger_code<span class="token punctuation">:</span> load_messenger_code<span class="token punctuation">)</span>\n      <span class="token constant">MealMeetUpTask</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>meal_log_id<span class="token punctuation">:</span> user_log<span class="token punctuation">.</span>id<span class="token punctuation">,</span>\n                            meal_meet_up_id<span class="token punctuation">:</span> meetup<span class="token punctuation">.</span>id<span class="token punctuation">,</span>\n                            task_status<span class="token punctuation">:</span> init_task_code<span class="token punctuation">)</span>\n    <span class="token keyword">end</span>\n\n    <span class="token keyword">def</span> <span class="token function">add_user_response</span><span class="token punctuation">(</span>meetup<span class="token punctuation">)</span>\n      <span class="token punctuation">{</span> data<span class="token punctuation">:</span>\n        <span class="token punctuation">{</span> email<span class="token punctuation">:</span> meetup<span class="token punctuation">.</span>admin<span class="token punctuation">.</span>service_uid<span class="token punctuation">,</span>\n          messenger<span class="token punctuation">:</span> meetup<span class="token punctuation">.</span>messenger<span class="token punctuation">.</span>value<span class="token punctuation">,</span>\n          messenger_room_id<span class="token punctuation">:</span> meetup<span class="token punctuation">.</span>messenger_room_id<span class="token punctuation">,</span>\n          member_ids<span class="token punctuation">:</span> <span class="token function">get_members_list</span><span class="token punctuation">(</span>meetup<span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>\n    <span class="token keyword">end</span>\n<span class="token comment"># ...</span>\n</code></pre>\n      </div>\n<p>사실 맨 밑의 member_ids는 좀 복잡하게 가져오더라도 맴버 추가에 성공한 id만 가져와야 하는게 맞을 것 같다.</p>\n<p>실제로 실행을 시켜 보니 member_ids라는 패러매터를 아예 가져오지 못했는데, 이는 패러매터의 형식이 배열로 되어 있어서 그렇다. 배열로 된 패러매터를 가져올 때는 스트롱 패러매터에서 형식을 지정해 주어야 한다</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>params.permit(:id => [])</code></pre>\n      </div>\n<p>service<em>uid로 컬럼명을 수정하면서 생긴 오류들을 잡아주고 차근차근 진행하고 있다가 확실히 response의 `member</em>ids` 를 제대로 MealMeetUp에 엮여있는 유저들만 가져오는게 맞다는 생각이 들었다.\n결국 가져와야 하는 것은</p>\n<p><strong>MealMeetUp에 속한 Task들 -> 각 Task를 가지고 있는 MealLog -> MealLog를 소유하고 있는 User의 service_uid</strong> 인 것이다.\nDB를 리셋하고 먼저 MealMeetUp을 하나 생성한 뒤에 유저 추가 과정을 거치니 잘 추가되었다.</p>\n<p>커밋을 한 뒤에 멘토님이 코드 리뷰와 함께 조언들을 해 주셨다.</p>\n<ul>\n<li>Fat Model, Skinny Controller</li>\n<li>컨트롤러는 최소한의 연결만 해주는 게 좋겠다.</li>\n<li>패러미터의 여부를 체크하는 것을 굳이 본 메서드에서 할 필요가 없어 보인다. -> before_action 사용</li>\n<li>member_ids의 유효성을 검사할 필요가 있다.</li>\n<li>메서드 이름은 다른사람이 이름만 보아도 무엇을 하는 작업인지 알 수 있어야 한다</li>\n<li>맴버 추가하는 일련의 과정을 담은 <code>add_flow</code> 메서드를 user모델에 정의해서 쓸 필요가 있겠다 (<code>init_member</code> 같은 이름으로)</li>\n</ul>\n<p>대개 리펙토링을 하면서 처리해야 하는 부분들이지만, 멤버 추가를 유저 모델에 정의하는 지금이라도 처리해야할 필요가 있다.\n기존에 MealMeetUp을 만들 때 자동으로 어드민 유저를 생성하는데, 어드민 유저도 같은 방에 포함되는 유저로서 MealLog, Messenger, Task 등록 등의 작업을 해 주어야 한다고 생각하기 때문이다.</p>\n<p>그런데 지금은 MealMeetUp 생성 당시 어드민 유저의 service<em>uid가 없기 때문에, 생성을 하자니 조금 애매한 부분이 있다.\n먼저 떠오르는 생각으로는 MealMeetUp 생성만 하고 어드민은 따로 Members 추가 시에 지정하는 방법이 있겠다. 아니면 처음 MealMeetUp 생성때부터 어드민이 될 사람의 service</em>uid를 받아야 한다.</p>\n<p><em>(추가)</em> 그냥 MealMeetUp 생성시에 어드민이 될 사람의 service_uid도 받는 방식으로 수정을 하기로 하였다.</p>\n<p>그리고 맴버가 추가된 MealMeetUp의 상태도 변화시켜서, 추가적인 유저 입력을 막을 수 있어야한다. 지금 방식대로라면 계속 유저를 추가하는대로 새로운 유저를 집어넣고 있는데, 이는 제대로된 방법이 아니다. <em>(처리 완료)</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token comment"># members_controller.rb</span>\n\n<span class="token keyword">def</span> add_member\n    <span class="token variable">@meetup</span> <span class="token operator">=</span> find_meetup\n    entry_members <span class="token operator">=</span> member_params<span class="token punctuation">[</span><span class="token symbol">:member_ids</span><span class="token punctuation">]</span>\n    entry_members<span class="token punctuation">.</span><span class="token keyword">each</span> <span class="token punctuation">{</span> <span class="token operator">|</span>member<span class="token operator">|</span> <span class="token function">init_member</span><span class="token punctuation">(</span>member<span class="token punctuation">,</span> <span class="token variable">@meetup</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>\n\n    <span class="token comment"># 맴버가 추가된 MeetUp은 상태를 변경해준다.</span>\n    <span class="token variable">@meetup</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>meetup_status<span class="token punctuation">:</span> <span class="token constant">CodeTable</span><span class="token punctuation">.</span><span class="token function">find_status</span><span class="token punctuation">(</span><span class="token string">\'paying\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span>\n\n    <span class="token function">render_200</span><span class="token punctuation">(</span><span class="token function">add_user_response</span><span class="token punctuation">(</span><span class="token variable">@meetup</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<h2 id="refactoring-1"><a href="#refactoring-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Refactoring (1)</h2>\n<p>현재까지 개발한 부분을 adapter와 연동해보기 위해 조금 미진한 부분을 수정하고 허로쿠에 배포해보기로 하였다.\n가장 우선적으로 수정해야겠다고 생각하는 부분이 처음 MealMeetUp 생성시 어드민도 <code>init_member</code> 를 해 주는 것인데, 맨 처음 MealMeetUp 생성을 구현했을 때 만든 부분에서 많은 수정을 해야겠다.</p>\n<ul>\n<li>MeetUp 생성시 먼저 메신저 종류, room_id만 써서 생성한다. (생성시엔 상태를 \'created\' 로 지정)</li>\n<li>service<em>uid 로 user를 생성 `init</em>member` 메서드로 필요한 데이터를 다 같이 생성한다(MealLog, Messenger, Task)</li>\n<li>생성 된 user가 어드민이 된다.</li>\n</ul>\n<p>먼저 <code>init_member</code> 메서드를 User모델로 옮기고 조금 추가적인 정보를 받도록 한다.\n그리고 처음 MeetUp 생성시에 필요한 정보만 넣어서 일단 생성을 하고, 그 MeetUp과 어드민이 될 맴버를 연결한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token comment"># models/user.rb</span>\n<span class="token comment"># 새로운 맴버 등록시 필요한 일련의 과정들</span>\n<span class="token keyword">def</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">init_member</span><span class="token punctuation">(</span>member_uid<span class="token punctuation">,</span> meetup<span class="token punctuation">,</span> messenger_code<span class="token punctuation">,</span> task_code<span class="token punctuation">)</span>\n    user <span class="token operator">=</span> <span class="token constant">User</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>service_uid<span class="token punctuation">:</span> member_uid<span class="token punctuation">)</span>\n    user_log <span class="token operator">=</span> <span class="token constant">MealLog</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>user_id<span class="token punctuation">:</span> user<span class="token punctuation">.</span>id<span class="token punctuation">)</span>\n    <span class="token constant">UserMessenger</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>user_id<span class="token punctuation">:</span> user<span class="token punctuation">.</span>id<span class="token punctuation">,</span>\n                            messenger_code<span class="token punctuation">:</span> messenger_code<span class="token punctuation">)</span>\n    <span class="token constant">MealMeetUpTask</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>meal_log_id<span class="token punctuation">:</span> user_log<span class="token punctuation">.</span>id<span class="token punctuation">,</span>\n                            meal_meet_up_id<span class="token punctuation">:</span> meetup<span class="token punctuation">.</span>id<span class="token punctuation">,</span>\n                            task_status<span class="token punctuation">:</span> task_code<span class="token punctuation">)</span>\n    user <span class="token comment"># 바로 user를 사용가능하도록 return</span>\n<span class="token keyword">end</span>\n\n\n<span class="token comment"># models/meal_meet_up.rb</span>\n<span class="token comment"># 빈 MeetUp 생성</span>\n<span class="token keyword">def</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">init_meetup</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span>\n    <span class="token function">create</span><span class="token punctuation">(</span>messenger_code<span class="token punctuation">:</span> <span class="token constant">CodeTable</span><span class="token punctuation">.</span><span class="token function">find_messenger</span><span class="token punctuation">(</span>params<span class="token punctuation">[</span><span class="token symbol">:messenger</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>id<span class="token punctuation">,</span>\n            messenger_room_id<span class="token punctuation">:</span> params<span class="token punctuation">[</span><span class="token symbol">:messenger_room_id</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            meetup_status<span class="token punctuation">:</span> <span class="token constant">CodeTable</span><span class="token punctuation">.</span><span class="token function">find_status</span><span class="token punctuation">(</span><span class="token string">\'created\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span>\n<span class="token keyword">end</span>\n\n\n<span class="token comment"># controllers/meal_meet_up_controller.rb</span>\n<span class="token keyword">def</span> create\n    <span class="token variable">@admin</span> <span class="token operator">=</span> <span class="token constant">User</span><span class="token punctuation">.</span><span class="token function">init_member</span><span class="token punctuation">(</span>meetup_params<span class="token punctuation">[</span><span class="token symbol">:messenger_user_id</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">@meetup</span><span class="token punctuation">,</span>\n                                <span class="token function">load_messenger_code</span><span class="token punctuation">(</span>meetup_params<span class="token punctuation">)</span><span class="token punctuation">,</span>\n                                <span class="token constant">CodeTable</span><span class="token punctuation">.</span><span class="token function">find_task</span><span class="token punctuation">(</span><span class="token string">\'unpaid\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span>\n    <span class="token function">update_additional_info</span><span class="token punctuation">(</span><span class="token variable">@admin</span><span class="token punctuation">,</span> <span class="token variable">@meetup</span><span class="token punctuation">)</span>\n    <span class="token function">render_201</span><span class="token punctuation">(</span><span class="token function">response_json_create</span><span class="token punctuation">(</span><span class="token variable">@meetup</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token keyword">end</span>\n\n<span class="token keyword">def</span> update\n    <span class="token variable">@meetup</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>total_price<span class="token punctuation">:</span> meetup_params<span class="token punctuation">[</span><span class="token symbol">:total_price</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                    meetup_status<span class="token punctuation">:</span> <span class="token function">load_status_code</span><span class="token punctuation">(</span>meetup_params<span class="token punctuation">[</span><span class="token symbol">:status</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token function">render_200</span><span class="token punctuation">(</span><span class="token function">response_json_update</span><span class="token punctuation">(</span><span class="token variable">@meetup</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<p>그리고 복잡하게 <code>if~else</code> 로 엮여있던 <code>create</code>, <code>update</code> 액션을 <code>members_controller</code> 에서 썼던 <code>before_action</code> 의 필터링을 적용하여 크게 다이어트 해 주었다.</p>\n<p>처음에 MealMeetUp을 만들 땐 돌아만 가게 만드느라 억지로 해쉬를 자르고 붙이고 하는 작업을 했었는데, 실질적으로 필요한 요소들을 조금 더 고민하고 수정을 하니 실제로는 더 적은 양의 코드로도 작성이 가능하게 되었다.</p>\n<p>하지만 코드를 작성하고 나서 실제 구동하여 테스트를 해보니 부족한 부분이 많았는데, 먼저 한번 유저를 추가하고 나면 더 추가하지 못하게 설계 한 부분이 미스였고, MealMeetUp도 중복 검사를 제대로 하지 못하고 있던 것이다.</p>\n<p>전반적으로 처음 코드를 작성할 때 중복 처리에 대해 크게 고민을 하지 않고 만든게 원인이었다. 조금 더 신중하게 코드를 작성해야 했었는데..</p>\n<p>특히 before<em>action을 너무 남용한 부분이 있었는데 `meal</em>meet<em>up#create` 만 해도 그냥 패러미터가 들어오자마자 무조건 MealMeetUp을 생성하도록 before</em>action을 하나 만들어 놓으니 나중에는 중복 검사를 할때 자꾸 \'이미 만들어진 meetup\' 이라는 오류를 내뿜게 되었다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token keyword">class</span> <span class="token class-name">MealMeetUpController</span> <span class="token operator">&lt;</span> <span class="token constant">ApplicationController</span>\n  include <span class="token constant">MealMeetUpHelper</span>\n  before_action <span class="token symbol">:check_params</span><span class="token punctuation">,</span> only<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token symbol">:create</span><span class="token punctuation">,</span> <span class="token symbol">:update</span><span class="token punctuation">]</span>\n  before_action <span class="token symbol">:check_meetup_update</span><span class="token punctuation">,</span> only<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token symbol">:update</span><span class="token punctuation">]</span>\n  before_action <span class="token symbol">:check_meetup_create</span><span class="token punctuation">,</span> only<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token symbol">:create</span><span class="token punctuation">]</span>\n  <span class="token comment"># before_action :init_meetup, only: [:create]</span>\n\n  <span class="token keyword">def</span> create\n    init_meetup\n    <span class="token comment"># ...</span>\n</code></pre>\n      </div>\n<p>이렇게 수정하여 먼저 중복된 meetup이 있는지 확인을 하고, 없으면 생성을 하는 과정을 거치도록 수정하니 잘 작동하였다.\n앞으로도 수정할 부분은 많이 있을 것이지만, 한줄 한줄 코드를 작성할 때 조금 더 과정에 대해 심혈을 기울여 생각할 필요성을 크게 느꼈다.</p>',frontmatter:{date:"2016/08/02",path:"/posts/easylunch-api-devlog-2",title:"Easylunch Api 서버 제작기 - 2",tags:["Rails"]}}},pathContext:{}}}});
//# sourceMappingURL=path---posts-easylunch-api-devlog-2-64348aa57e76ed7664a1.js.map