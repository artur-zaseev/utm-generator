class UTM_Generator {
	constructor(options) {
		this.url = options.url;
		this.traf_type = options.traf_type;
		this.traf_inputs = this.traf_type.querySelectorAll("input");
		this.utm_source = options.utm_source;
		this.utm_medium = options.utm_medium;
		this.utm_campaign = options.utm_campaign;
		this.utm_content = options.utm_content;
		this.utm_term = options.utm_term;
		this.btn = options.btn;
		this.result = options.result;

		this._init();
	}

	_init(){
		this._events();
		this._createUtm();
	}

	_events(){
		const self = this;

		this.btn.addEventListener("click", () => {
			if (this._isDataReady()) {
				this._showResult();
			} else {
				this._hideResult();
				this._showMsg("Заполните все поля");
			}
		});

		this.traf_inputs.forEach(function(checkbox){
			checkbox.addEventListener("click", function(e){
				for (let i = 0; i < self.traf_inputs.length; i++) {
					self.traf_inputs[i].checked = false;
				}
				this.checked = true;
				self._createUtm();
			})
		});
	}

	_createUtm(){
		let inputs = this.traf_type.querySelector("input:checked");

		if (inputs.name == "traf_type_yandex") {
			this.utm_source.value = "yandex";
			this.utm_medium.value = "cpc";
			this.utm_campaign.value = "{campaign_id}";
			this.utm_content.value = "{ad_id}";
			this.utm_term.value = "{keyword}";
		}

		else if (inputs.name == "traf_type_google") {
			this.utm_source.value = "goole";
			this.utm_medium.value = "cpc";
			this.utm_campaign.value = "{campaignid}";
			this.utm_content.value = "{creative}";
			this.utm_term.value = "{keyword}";
		}

		else if (inputs.name == "traf_type_any") {
			this.utm_source.value = "new_source";
			this.utm_medium.value = "cpc";
			this.utm_campaign.value = "new_campaign";
			this.utm_content.value = "new_content";
			this.utm_term.value = "new_term";
		}

		else {
			this._showMsg("Ошибка в функции _createUtm");
		}
	}

	_isDataReady(){
		let readyStatus = 0;
		
		if (this.url.value != "") readyStatus += 1;
		if (this.utm_source.value != "") readyStatus += 1;
		if (this.utm_medium.value != "") readyStatus += 1;
		if (this.utm_campaign.value != "") readyStatus += 1;
		if (this.utm_content.value != "") readyStatus += 1;
		if (this.utm_term.value != "") readyStatus += 1;
		
		return (readyStatus >= 6) ? true : false;
	}

	_showMsg(text) {
		alert(text);
	}

	_showResult(){
		let readyUrl = `${this.url.value}/?utm_source=${this.utm_source.value}&utm_medium=${this.utm_medium.value}&utm_campaign=${this.utm_campaign.value}&utm_content=${this.utm_content.value}&utm_term=${this.utm_term.value}`;
		this.result.innerHTML = readyUrl;
		this.result.classList.remove("d-none");
	}

	_hideResult() {
		this.result.classList.add("d-none");
	}

}

export default UTM_Generator;