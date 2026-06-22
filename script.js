const SURVEY_URL = '[INSERT SURVEY LINK]';

document.addEventListener('DOMContentLoaded', function () {
  const pageUrl = window.location.href;
  const shareText = encodeURIComponent('Help shape the future of AI in healthcare — take this 10-min global clinician survey on computer vision:');

  // Populate copy bar URL display
  const copyBarUrl = document.getElementById('copy-bar-url');
  if (copyBarUrl) copyBarUrl.textContent = pageUrl;

  // Email
  const emailLink = document.getElementById('email-share');
  if (emailLink) {
    const subject = encodeURIComponent('Survey: Computer Vision AI in Healthcare — Share Your Perspective');
    const body = encodeURIComponent(
      'Hi,\n\n' +
      'You are invited to take part in a brief global survey on computer vision (CV) AI in healthcare, ' +
      'conducted by researchers at Mayo Clinic and Arizona State University.\n\n' +
      'The survey takes about 10 minutes and is completely anonymous. ' +
      'It is open to physicians, nurses, and allied health professionals worldwide — all specialties and experience levels.\n\n' +
      'Your perspective will directly shape how CV technology is developed for clinical practice.\n\n' +
      'Take the survey here: ' + SURVEY_URL + '\n\n' +
      'Or visit the study page: ' + pageUrl + '\n\n' +
      'Thank you for your time!\n'
    );
    emailLink.setAttribute('href', 'mailto:?subject=' + subject + '&body=' + body);
  }

  // LinkedIn
  const linkedinLink = document.getElementById('linkedin-share');
  if (linkedinLink) {
    linkedinLink.setAttribute('href',
      'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(pageUrl)
    );
  }

  // X (Twitter)
  const xLink = document.getElementById('x-share');
  if (xLink) {
    xLink.setAttribute('href',
      'https://x.com/intent/tweet?text=' + shareText + '&url=' + encodeURIComponent(pageUrl)
    );
  }

  // Facebook
  const fbLink = document.getElementById('facebook-share');
  if (fbLink) {
    fbLink.setAttribute('href',
      'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(pageUrl)
    );
  }

  // WhatsApp
  const waLink = document.getElementById('whatsapp-share');
  if (waLink) {
    waLink.setAttribute('href',
      'https://wa.me/?text=' + shareText + '%20' + encodeURIComponent(pageUrl)
    );
  }
});

function copyLink() {
  const url = window.location.href;
  const btn = document.getElementById('copy-btn');
  const label = document.getElementById('copy-label');

  if (!navigator.clipboard) {
    const el = document.createElement('textarea');
    el.value = url;
    el.style.position = 'fixed';
    el.style.opacity = '0';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showCopied(btn, label);
    return;
  }

  navigator.clipboard.writeText(url).then(function () {
    showCopied(btn, label);
  });
}

function showCopied(btn, label) {
  label.textContent = 'Copied!';
  btn.style.background = '#0d9488';
  setTimeout(function () {
    label.textContent = 'Copy';
    btn.style.background = '';
  }, 2200);
}
