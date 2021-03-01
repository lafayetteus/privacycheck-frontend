const groq = require("groq")
//
// === Drafts ===
//

module.exports.draftDocument = draftId => groq`*[_id == '${draftId}'][0] {...}`

//
// === Components ===
//
const asset = groq`{
	_type,
	_key,
	alt,
	'dimensions': asset->metadata.dimensions,
	'url': asset->url,
}`

const richText = groq`[] {
	...,
	'asset': asset->url,
}`

const seo = groq`{
	metaTitle,
	metaDescription,
	metaKeywords,
	openGraphTitle,
	openGraphDescription,
	openGraphImage ${asset},
	twitterTitle,
	twitterDescription,
	twitterImage ${asset},
}`

const components = groq`components[] {
	...,

	_type == 'hero' => {
		...,
    	_key,
		triggerContact,
    	title,
    	subtitle ${richText},
    	image ${asset}
  	},

	_type == 'introSection' => {
      _key,
	  triggerContact,
	  showNav,
	  navTitle,
      title,
      subtitle,
      description ${richText},
      image ${asset}
    },

	_type == 'ourSolution' => {
      _key,
	  triggerContact,
	  showNav,
	  navTitle,
      title,
      image ${asset},
      description ${richText},
      details ${richText}
    },


	_type == 'howItWorks' => {
      _key,
	  triggerContact,
	  showNav,
	  navTitle,
      title,
      description ${richText},
	  list[] {
		  _key,
		  title,
		  description ${richText}
	  }
    },

	_type == 'news' => {
		_key,
		triggerContact,
		showNav,
		navTitle,
    	title,
    	list[] {
			_key,
			date,
			url,
			title,
			description
		}
    },

	_type == 'bodySectionRichText' => {
		_key,
		triggerContact,
		showNav,
		navTitle,
		description ${richText},
	},

	_type == 'bodySectionImage' => {
		_key,
		triggerContact,
		showNav,
		navTitle,
		description ${richText},
		image ${asset},
		details ${richText}
	},

}`

//
// === Globals ===
//

//
// === Homepage ===
//

module.exports.homepage = groq`*[_type == 'homepage'][0] {
	${components},
	seo ${seo},
}`

module.exports.draftHomepage = draftId => groq`*[_type == 'homepage' && _id == '${draftId}'][0] {
	${components},
	seo ${seo},
}`

//
// === Pages ===
//

module.exports.pages = groq`*[_type in ['page']] {
	_id,
	title,
	"slug": url.current,
	content ${richText},
	seo ${seo},
}`

module.exports.draftPage = draftId => groq`*[_type == 'page' && _id == '${draftId}'][0]{
	_id,
	title,
	"slug": url.current,
	content ${richText},
	seo ${seo},
}`
module.exports.findPage = id => groq`*[_type == 'page' && _id == '${id}'][0]{
	_id,
	title,
	"slug": url.current,
	content ${richText},
	seo ${seo},
}`
