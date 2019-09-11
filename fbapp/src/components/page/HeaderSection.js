/**
 * Created by jiangyunfan on 2019/9/8.
 */
import React, {Component} from 'react';


const NavArea = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">未来之地</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    菜单
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#services">抉择</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#about">关于我们</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#contact">联系我们</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

const HeaderArea = () => {
    return (
        <header className="masthead">
            <div className="container">
                <div className="intro-text" style={{background: '#00000066'}}>
                    <div className="intro-lead-in" style={{'textShadow': '4px 4px 2px black'}}>相信您内心的抉择</div>
                    <div className="intro-heading text-uppercase" style={{'textShadow': '4px 4px 2px black'}}>Future Borderland</div>
                    <a className="btn btn-primary btn-lg text-uppercase js-scroll-trigger" href="#services">走进教会</a>
                </div>
            </div>
        </header>
    )
};

const MainArea = () =>{
    return (
        <section className="page-section" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">抉择</h2>
                        <h3 className="section-subheading text-muted">当您路过此福地，您就是我们最强有力的后援</h3>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className="fas fa-american-sign-language-interpreting fa-stack-1x fa-inverse"></i>
          </span>
                        </a>
                        <h4 className="service-heading">入会测试（WIP）</h4>
                        <p className="text-muted">测试题中可能会有一些读取您隐私的提问，如果不想回答可以选择跳过。一共10道题，结果会由小组人事组统一进行回复。</p>
                    </div>
                    <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className="fas fa-bible fa-stack-1x fa-inverse"></i>
          </span>
                        <h4 className="service-heading">阅读论文（TBD）</h4>
                        <p className="text-muted">在此处您将会得知"未来之地"是在具体研究的事物和方向</p>
                    </div>
                    <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className="fas fa-award fa-stack-1x fa-inverse"></i>
          </span>
                        <h4 className="service-heading">团队成就（TBD）</h4>
                        <p className="text-muted">此处您将了解到"未来之地"团队至今为止所获得的所有殊荣</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AboutArea = () => {
    return(
        <section className="page-section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">关于</h2>
                        <h3 className="section-subheading text-muted">组织的建立和主要研究发展方向和对未来的展望</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="timeline">
                            <li>
                                <div className="timeline-image">
                                    <img className="rounded-circle img-fluid" src={'../img/about/1.jpg'} alt=""/>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>2019年7月1日</h4>
                                        <h4 className="subheading">组织正式成立</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">（TBD）</p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>2019年9月</h4>
                                        <h4 className="subheading">重要决定</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">组织决定开始主要探讨和研究 "超人工智能" + "生命基因工程" + "宇宙航天" 三大板块方向技术</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="timeline-image">
                                    <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>2020年9月</h4>
                                        <h4 className="subheading">准备向社会推广"未来之地"组织，广纳贤才义士</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">在一年之内取得一定成就之后，组织将会开始对外推广并且进行第一次对外演讲</p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>2022年上半年</h4>
                                        <h4 className="subheading">成立特定技术授权组织</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">组织内技术开始累积并且有一定规模，组织需要一个良好的团队去维护内部技术人员的知识产权和对将来的规划。从此组织转向一个以技术核心为竞争力的知识产权维系单位</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="timeline-image">
                                    <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>2022年下半年</h4>
                                        <h4 className="subheading">组织开始对生命科学和宇宙航天领域进行招揽人才</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">（TBD）</p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>2119年下半年</h4>
                                        <h4 className="subheading">Project Relic开始实践</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">（TBD）</p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="timeline-image">
                                    <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>不论何时何地</h4>
                                        <h4 className="subheading">我们期待你们的加入</h4>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
};

const ModalOne = () => {
    return (
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal">
                        <div className="lr">
                            <div className="rl"></div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <div className="modal-body">
                                    <h2 className="text-uppercase">未来之地入会测试</h2>
                                    <p className="item-intro text-muted">我们需要忠诚的、有信仰的，伟大的您！</p>
                                        <p>1. 如果你明天将要回到过去，你最想会见的人是谁？</p>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="list-group list-group-horizontal-xl" id="list-tab" role="tablist">
                                                <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">过去的你</a>
                                                <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">前女友</a>
                                                <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">自己的父亲</a>
                                                <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">一个有钱人</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-group mt-5" role="group">
                                        <button className="btn btn-danger" data-dismiss="modal" type="button">
                                            <i className="fas fa-times"></i>
                                            残忍离去</button>
                                        <button className="btn btn-success ml-5" data-dismiss="modal" type="button">
                                            <i className="fas fa-check"></i>
                                            提交</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const ContactArea = () => {
    return (
        <section className="page-section" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">联系我们</h2>
                        <h3 className="section-subheading text-muted">留下您的名字，邮箱和意见。我们将会在后续的时间内仔细研读你的意见并且给与您反馈</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <form id="contactForm" name="sentMessage" noValidate="novalidate">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input className="form-control" id="name" type="text" placeholder="你的名字 *" required="required" data-validation-required-message="Please enter your name."/>
                                            <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" id="email" type="email" placeholder="邮箱地址 *" required="required" data-validation-required-message="Please enter your email address."/>
                                            <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <textarea className="form-control" id="message" placeholder="意见 *" required="required" data-validation-required-message="Please enter a message."></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-lg-12 text-center">
                                    <div id="success"></div>
                                    <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">提交（TBD）</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};




class HeaderSection extends Component {
    render() {
        return(
            <div>
                <NavArea/>
                <HeaderArea/>
                <MainArea/>
                <AboutArea/>
                <ContactArea/>
                <ModalOne/>
            </div>
        )
    }
}

export default HeaderSection;


