import React from 'react';
// import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import Header from 'components/Header/Header.jsx';

const dashboardRoutes = [];

class Privacy extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div style={{ backgroundColor: 'white', padding: '10%' }}>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="1"
          // rightLinks={<HeaderLinks history={this.props.history} />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: 'dark',
            brand: '2'
          }}
          {...rest}
        />
        <h1 style={{ textAlign: 'center', color: 'black' }}>Privacy Policy</h1>
        <p style={{ color: 'black' }}>
          Privacy Policy for Company Name At Website Name, accessible at
          Website.com, one of our main priorities is the privacy of our
          visitors. This Privacy Policy document contains types of information
          that is collected and recorded by Website Name and how we use it. If
          you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us through email at
          Email@Website.com Log Files Website Name follows a standard procedure
          of using log files. These files log visitors when they visit websites.
          All hosting companies do this and a part of hosting services'
          analytics. The information collected by log files include internet
          protocol (IP) addresses, browser type, Internet Service Provider
          (ISP), date and time stamp, referring/exit pages, and possibly the
          number of clicks. These are not linked to any information that is
          personally identifiable. The purpose of the information is for
          analyzing trends, administering the site, tracking users' movement on
          the website, and gathering demographic information. Cookies and Web
          Beacons Like any other website, Website Name uses ‘cookies'. These
          cookies are used to store information including visitors' preferences,
          and the pages on the website that the visitor accessed or visited. The
          information is used to optimize the users' experience by customizing
          our web page content based on visitors' browser type and/or other
          information. DoubleClick DART Cookie Google is one of a third-party
          vendor on our site. It also uses cookies, known as DART cookies, to
          serve ads to our site visitors based upon their visit to
          www.website.com and other sites on the internet. However, visitors may
          choose to decline the use of DART cookies by visiting the Google ad
          and content network Privacy Policy at the following URL –
          https://policies.google.com/technologies/ads. Some of advertisers on
          our site may use cookies and web beacons. Our advertising partners are
          listed below. Each of our advertising partners has their own Privacy
          Policy for their policies on user data. For easier access, we
          hyperlinked to their Privacy Policies below. Google
          https://policies.google.com/technologies/ads Privacy Policies You may
          consult this list to find the Privacy Policy for each of the
          advertising partners of Website Name. Third-party ad servers or ad
          networks uses technologies like cookies, JavaScript, or Web Beacons
          that are used in their respective advertisements and links that appear
          on Website Name, which are sent directly to users' browser. They
          automatically receive your IP address when this occurs. These
          technologies are used to measure the effectiveness of their
          advertising campaigns and/or to personalize the advertising content
          that you see on websites that you visit. Note that Website Name has no
          access to or control over these cookies that are used by third-party
          advertisers. Third Part Privacy Policies Website Name's Privacy Policy
          does not apply to other advertisers or websites. Thus, we are advising
          you to consult the respective Privacy Policies of these third-party ad
          servers for more detailed information. It may include their practices
          and instructions about how to opt-out of certain options. You may find
          a complete list of these Privacy Policies and their links here:
          Privacy Policy Links. You can choose to disable cookies through your
          individual browser options. To know more detailed information about
          cookie management with specific web browsers, it can be found at the
          browsers' respective websites. What Are Cookies? Children's
          Information Another part of our priority is adding protection for
          children while using the internet. We encourage parents and guardians
          to observe, participate in, and/or monitor and guide their online
          activity. Website Name does not knowingly collect any Personal
          Identifiable Information from children under the age of 13. If you
          think that your child provided this kind of information on our
          website, we strongly encourage you to contact us immediately and we
          will do our best efforts to promptly remove such information from our
          records. Online Privacy Policy Only This privacy policy applies only
          to our online activities and is valid for visitors to our website with
          regards to the information that they shared and/or collect in Website
          Name. This policy is not applicable to any information collected
          offline or via channels other than this website. Consent By using our
          website, you hereby consent to our Privacy Policy and agree to its
          Terms and Conditions. Privacy Policy for Company Name At Website Name,
          accessible at Website.com, one of our main priorities is the privacy
          of our visitors. This Privacy Policy document contains types of
          information that is collected and recorded by Website Name and how we
          use it. If you have additional questions or require more information
          about our Privacy Policy, do not hesitate to contact us through email
          at Email@Website.com Log Files Website Name follows a standard
          procedure of using log files. These files log visitors when they visit
          websites. All hosting companies do this and a part of hosting
          services' analytics. The information collected by log files include
          internet protocol (IP) addresses, browser type, Internet Service
          Provider (ISP), date and time stamp, referring/exit pages, and
          possibly the number of clicks. These are not linked to any information
          that is personally identifiable. The purpose of the information is for
          analyzing trends, administering the site, tracking users' movement on
          the website, and gathering demographic information. Cookies and Web
          Beacons Like any other website, Website Name uses ‘cookies'. These
          cookies are used to store information including visitors' preferences,
          and the pages on the website that the visitor accessed or visited. The
          information is used to optimize the users' experience by customizing
          our web page content based on visitors' browser type and/or other
          information. DoubleClick DART Cookie Google is one of a third-party
          vendor on our site. It also uses cookies, known as DART cookies, to
          serve ads to our site visitors based upon their visit to
          www.website.com and other sites on the internet. However, visitors may
          choose to decline the use of DART cookies by visiting the Google ad
          and content network Privacy Policy at the following URL –
          https://policies.google.com/technologies/ads. Some of advertisers on
          our site may use cookies and web beacons. Our advertising partners are
          listed below. Each of our advertising partners has their own Privacy
          Policy for their policies on user data. For easier access, we
          hyperlinked to their Privacy Policies below. Google
          https://policies.google.com/technologies/ads Privacy Policies You may
          consult this list to find the Privacy Policy for each of the
          advertising partners of Website Name. Third-party ad servers or ad
          networks uses technologies like cookies, JavaScript, or Web Beacons
          that are used in their respective advertisements and links that appear
          on Website Name, which are sent directly to users' browser. They
          automatically receive your IP address when this occurs. These
          technologies are used to measure the effectiveness of their
          advertising campaigns and/or to personalize the advertising content
          that you see on websites that you visit. Note that Website Name has no
          access to or control over these cookies that are used by third-party
          advertisers. Third Part Privacy Policies Website Name's Privacy Policy
          does not apply to other advertisers or websites. Thus, we are advising
          you to consult the respective Privacy Policies of these third-party ad
          servers for more detailed information. It may include their practices
          and instructions about how to opt-out of certain options. You may find
          a complete list of these Privacy Policies and their links here:
          Privacy Policy Links. You can choose to disable cookies through your
          individual browser options. To know more detailed information about
          cookie management with specific web browsers, it can be found at the
          browsers' respective websites. What Are Cookies? Children's
          Information Another part of our priority is adding protection for
          children while using the internet. We encourage parents and guardians
          to observe, participate in, and/or monitor and guide their online
          activity. Website Name does not knowingly collect any Personal
          Identifiable Information from children under the age of 13. If you
          think that your child provided this kind of information on our
          website, we strongly encourage you to contact us immediately and we
          will do our best efforts to promptly remove such information from our
          records. Online Privacy Policy Only This privacy policy applies only
          to our online activities and is valid for visitors to our website with
          regards to the information that they shared and/or collect in Website
          Name. This policy is not applicable to any information collected
          offline or via channels other than this website. Consent By using our
          website, you hereby consent to our Privacy Policy and agree to its
          Terms and Conditions.
        </p>
      </div>
    );
  }
}

export default Privacy;
