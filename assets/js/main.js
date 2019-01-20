import UTM_Generator from "./modules/UTM_Generator"

const options = {
	url: document.querySelector("#inlineFormInputGroup"),	
	traf_type: document.querySelector("#traf_type"),
	utm_source: document.querySelector("#utm_source"),
	utm_medium: document.querySelector("#utm_medium"),
	utm_campaign: document.querySelector("#utm_campaign"),
	utm_content: document.querySelector("#utm_content"),
	utm_term: document.querySelector("#utm_term"),
	btn: document.querySelector("#btn"),
	result: document.querySelector("#result")
}

new UTM_Generator(options);