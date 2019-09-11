import React, {Component} from 'react';
import './App.css';
import './vender/bootstrap/css/bootstrap.min.css';
import './vender/agency/agency.css';
import './vender/fontawesome-free/css/all.css';
import './vender/bootstrap/css/bootstrap.min.css';
import HeaderSection from './components/page/HeaderSection';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle'

window.jQuery = $;
window.$ = $;

// require('./vender/agency/agency');
require('./vender/jquery-easing/jquery.easing');
require('./vender/jquery-easing/jquery.easing.compatibility');


class App extends Component {
    state = {
        tbData: [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ]
    };

    removeData = index => {
        const {tbData} = this.state;

        this.setState({
            tbData: tbData.filter((row, i) => {
                return i !== index
            }),
        })
    };

    handleSubmit = tbData => {
        this.setState({tbData: [...this.state.tbData, tbData]})
    };

    //Init pre loaded script for page interactions.
    componentDidMount() {

        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
            if (window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && window.location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 54)
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
        });

        $('.js-scroll-trigger').click(function () {
            $('.navbar-collapse').collapse('hide');
        });

        $('body').scrollspy({
            target: '#mainNav',
            offset: 56
        });

        var navbarCollapse = function () {
            if ($("#mainNav").offset().top > 100) {
                $("#mainNav").addClass("navbar-shrink");
            } else {
                $("#mainNav").removeClass("navbar-shrink");
            }
        };
        navbarCollapse();
        $(window).scroll(navbarCollapse);
    }

    render() {
        // const { tbData } = this.state;
        return (
            <div id="page-top">
                {/*<Table tableData={tbData} removeData={this.removeData}/>*/}
                {/*<Form handleSubmit={this.handleSubmit} />*/}
                <div>
                    <HeaderSection />
                </div>
            </div>

        );
    }

}

export default App;
