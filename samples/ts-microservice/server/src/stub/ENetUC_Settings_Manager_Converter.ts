// [PrintTSConverterCode]
// [PrintTSConverterComments]
/*
 * ENetUC_Settings_Manager_Converter.ts
 * "UC-Server-Access-Protocol-Settings-Manager" ASN.1 stubs.
 * This file was generated by estos esnacc (V5.0.1, 16.03.2023)
 * based on Coral WinSnacc written by Deepak Gupta
 * NOTE: This is a machine generated file - editing not recommended
 */

// prettier-ignore
/* eslint-disable curly, max-len, max-lines, no-unused-vars, jsdoc/require-jsdoc, @typescript-eslint/naming-convention, @typescript-eslint/no-use-before-define, @typescript-eslint/no-unused-vars */

// [PrintTSConverterImports]
import { DecodeContext, ConverterError, ConverterErrorType, ConverterErrors, EncodeContext, TSConverter, INamedType } from "./TSConverterBase";
import * as ENetUC_Settings_Manager from "./ENetUC_Settings_Manager";
// [printTSImports]
import * as asn1ts from "@estos/asn1ts";
import * as ENetUC_Common from "./ENetUC_Common";
import * as ENetUC_Common_Converter from "./ENetUC_Common_Converter";

// [PrintTSEncoderDecoderCode]
export class AsnSomeSettings_Converter {
	public static toJSON(s: ENetUC_Settings_Manager.AsnSomeSettings, t: ENetUC_Settings_Manager.AsnSomeSettings & INamedType, errors?: ConverterErrors, context?: EncodeContext, parametername?: string): boolean {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addContext(context, parametername, "AsnSomeSettings");

		// [Print_JSON_EncoderSeqDefCode]
		if (newContext.bAddTypes)
			t._type = "AsnSomeSettings";
		TSConverter.fillJSONParam(s, t, "bEnabled", "boolean", errors, newContext, true);
		TSConverter.fillJSONParam(s, t, "u8sUsername", "string", errors, newContext, true);
		TSConverter.fillJSONParam(s, t, "stTime", "Date", errors, newContext, true);
		if (s.optionalParams) {
			const _optionalParams = new ENetUC_Common.AsnOptionalParameters();
			if (ENetUC_Common_Converter.AsnOptionalParameters_Converter.toJSON(s.optionalParams, _optionalParams, errors, newContext, "optionalParams"))
				t.optionalParams = _optionalParams;
		}

		return errors.validateResult(errorCount, newContext, "AsnSomeSettings");
	}

	public static fromJSON(data: string | object | undefined, errors?: ConverterErrors, context?: DecodeContext, parametername?: string, optional?: boolean): ENetUC_Settings_Manager.AsnSomeSettings | undefined {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addContext(context, parametername, "AsnSomeSettings");

		let t: ENetUC_Settings_Manager.AsnSomeSettings | undefined;
		const s = TSConverter.prepareJSONData<ENetUC_Settings_Manager.AsnSomeSettings>(data, errors, newContext, optional);
		if (s !== undefined) {
			t = ENetUC_Settings_Manager.AsnSomeSettings.initEmpty();
			// [Print_JSON_DecoderSeqDefCode]
			TSConverter.fillJSONParam(s, t, "bEnabled", "boolean", errors, context, true);
			TSConverter.fillJSONParam(s, t, "u8sUsername", "string", errors, context, true);
			if (TSConverter.validateParam(s, "stTime", "string", errors, context, true) && s.stTime)
				t.stTime = new Date(s.stTime);
			t.optionalParams = ENetUC_Common_Converter.AsnOptionalParameters_Converter.fromJSON(s.optionalParams, errors, newContext, "optionalParams", true);
		}
		if (errors.validateResult(errorCount, newContext, "AsnSomeSettings"))
			return t;

		return undefined;
	}

	public static toBER(s: ENetUC_Settings_Manager.AsnSomeSettings | undefined, errors?: ConverterErrors, context?: EncodeContext, name?: string, optional?: boolean | number): asn1ts.Sequence | undefined {
		name ||= "AsnSomeSettings";
		if (!s) {
			TSConverter.addMissingError(errors, context, name, optional);
			return undefined;
		}

		const result = new asn1ts.Sequence(TSConverter.getASN1TSConstructorParams(name, optional));
		const t = result.valueBlock.value;
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addContext(context, name, "AsnSomeSettings");

		// [Print_BER_EncoderSeqDefCode]
		TSConverter.validateParam(s, "bEnabled", "boolean", errors, newContext, true);
		TSConverter.validateParam(s, "u8sUsername", "string", errors, newContext, true);
		TSConverter.validateParam(s, "stTime", "Date", errors, newContext, true);
		const _optionalParams = ENetUC_Common_Converter.AsnOptionalParameters_Converter.toBER(s.optionalParams, errors, newContext, "optionalParams", 3);
		if (errors.validateResult(errorCount, newContext, "AsnSomeSettings")) {
			if (s.bEnabled !== undefined)
				t.push(new asn1ts.Boolean({ value: s.bEnabled, name: "bEnabled", idBlock: { optionalID: 0 } }));
			if (s.u8sUsername !== undefined)
				t.push(new asn1ts.Utf8String({ value: s.u8sUsername, name: "u8sUsername", idBlock: { optionalID: 1 } }));
			if (s.stTime !== undefined)
				t.push(new asn1ts.Real({ value: TSConverter.getVariantTimeFromDateTime(s.stTime), name: "stTime", idBlock: { optionalID: 2 } }));
			if (_optionalParams)
				t.push(_optionalParams);
			return result;
		}
		return undefined;
	}

	public static fromBER(data: Uint8Array | asn1ts.BaseBlock | undefined, errors?: ConverterErrors, context?: DecodeContext, parametername?: string, optional?: boolean): ENetUC_Settings_Manager.AsnSomeSettings | undefined {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addContext(context, parametername, "AsnSomeSettings");

		let t: ENetUC_Settings_Manager.AsnSomeSettings | undefined;
		const s = TSConverter.prepareASN1BERData(ENetUC_Settings_Manager.AsnSomeSettings.getASN1Schema, data, errors, newContext, optional);
		if (asn1ts.Sequence.typeGuard(s)) {
			t = ENetUC_Settings_Manager.AsnSomeSettings.initEmpty();
			// [Print_BER_DecoderSeqDefCode]
			TSConverter.fillASN1Param(s, t, "bEnabled", "Boolean", errors, newContext, true);
			TSConverter.fillASN1Param(s, t, "u8sUsername", "Utf8String", errors, newContext, true);
			TSConverter.fillASN1Param(s, t, "stTime", "AsnSystemTime", errors, newContext, true);
			t.optionalParams = ENetUC_Common_Converter.AsnOptionalParameters_Converter.fromBER(s.getTypedValueByName(asn1ts.Sequence, "optionalParams"), errors, newContext, "optionalParams", true);
		}

		if (errors.validateResult(errorCount, newContext, "AsnSomeSettings"))
			return t;

		return undefined;
	}
}

// [PrintTSEncoderDecoderCode]
export class AsnGetSettingsArgument_Converter {
	public static toJSON(s: ENetUC_Settings_Manager.AsnGetSettingsArgument, t: ENetUC_Settings_Manager.AsnGetSettingsArgument & INamedType, errors?: ConverterErrors, context?: EncodeContext, parametername?: string): boolean {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addContext(context, parametername, "AsnGetSettingsArgument");

		// [Print_JSON_EncoderSeqDefCode]
		if (newContext.bAddTypes)
			t._type = "AsnGetSettingsArgument";
		if (s.optionalParams) {
			const _optionalParams = new ENetUC_Common.AsnOptionalParameters();
			if (ENetUC_Common_Converter.AsnOptionalParameters_Converter.toJSON(s.optionalParams, _optionalParams, errors, newContext, "optionalParams"))
				t.optionalParams = _optionalParams;
		}

		return errors.validateResult(errorCount, newContext, "AsnGetSettingsArgument");
	}

	public static fromJSON(data: string | object | undefined, errors?: ConverterErrors, context?: DecodeContext, parametername?: string, optional?: boolean): ENetUC_Settings_Manager.AsnGetSettingsArgument | undefined {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addContext(context, parametername, "AsnGetSettingsArgument");

		let t: ENetUC_Settings_Manager.AsnGetSettingsArgument | undefined;
		const s = TSConverter.prepareJSONData<ENetUC_Settings_Manager.AsnGetSettingsArgument>(data, errors, newContext, optional);
		if (s !== undefined) {
			t = ENetUC_Settings_Manager.AsnGetSettingsArgument.initEmpty();
			// [Print_JSON_DecoderSeqDefCode]
			t.optionalParams = ENetUC_Common_Converter.AsnOptionalParameters_Converter.fromJSON(s.optionalParams, errors, newContext, "optionalParams", true);
		}
		if (errors.validateResult(errorCount, newContext, "AsnGetSettingsArgument"))
			return t;

		return undefined;
	}

	public static toBER(s: ENetUC_Settings_Manager.AsnGetSettingsArgument | undefined, errors?: ConverterErrors, context?: EncodeContext, name?: string, optional?: boolean | number): asn1ts.Sequence | undefined {
		name ||= "AsnGetSettingsArgument";
		if (!s) {
			TSConverter.addMissingError(errors, context, name, optional);
			return undefined;
		}

		const result = new asn1ts.Sequence(TSConverter.getASN1TSConstructorParams(name, optional));
		const t = result.valueBlock.value;
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addContext(context, name, "AsnGetSettingsArgument");

		// [Print_BER_EncoderSeqDefCode]
		const _optionalParams = ENetUC_Common_Converter.AsnOptionalParameters_Converter.toBER(s.optionalParams, errors, newContext, "optionalParams", true);
		if (errors.validateResult(errorCount, newContext, "AsnGetSettingsArgument")) {
			if (_optionalParams)
				t.push(_optionalParams);
			return result;
		}
		return undefined;
	}

	public static fromBER(data: Uint8Array | asn1ts.BaseBlock | undefined, errors?: ConverterErrors, context?: DecodeContext, parametername?: string, optional?: boolean): ENetUC_Settings_Manager.AsnGetSettingsArgument | undefined {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addContext(context, parametername, "AsnGetSettingsArgument");

		let t: ENetUC_Settings_Manager.AsnGetSettingsArgument | undefined;
		const s = TSConverter.prepareASN1BERData(ENetUC_Settings_Manager.AsnGetSettingsArgument.getASN1Schema, data, errors, newContext, optional);
		if (asn1ts.Sequence.typeGuard(s)) {
			t = ENetUC_Settings_Manager.AsnGetSettingsArgument.initEmpty();
			// [Print_BER_DecoderSeqDefCode]
			t.optionalParams = ENetUC_Common_Converter.AsnOptionalParameters_Converter.fromBER(s.getTypedValueByName(asn1ts.Sequence, "optionalParams"), errors, newContext, "optionalParams", true);
		}

		if (errors.validateResult(errorCount, newContext, "AsnGetSettingsArgument"))
			return t;

		return undefined;
	}
}

// [PrintTSEncoderDecoderCode]
export class AsnSetSettingsResult_Converter {
	public static toJSON(s: ENetUC_Settings_Manager.AsnSetSettingsResult, t: ENetUC_Settings_Manager.AsnSetSettingsResult & INamedType, errors?: ConverterErrors, context?: EncodeContext, parametername?: string): boolean {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addContext(context, parametername, "AsnSetSettingsResult");

		// [Print_JSON_EncoderSeqDefCode]
		if (newContext.bAddTypes)
			t._type = "AsnSetSettingsResult";
		if (s.optionalParams) {
			const _optionalParams = new ENetUC_Common.AsnOptionalParameters();
			if (ENetUC_Common_Converter.AsnOptionalParameters_Converter.toJSON(s.optionalParams, _optionalParams, errors, newContext, "optionalParams"))
				t.optionalParams = _optionalParams;
		}

		return errors.validateResult(errorCount, newContext, "AsnSetSettingsResult");
	}

	public static fromJSON(data: string | object | undefined, errors?: ConverterErrors, context?: DecodeContext, parametername?: string, optional?: boolean): ENetUC_Settings_Manager.AsnSetSettingsResult | undefined {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addContext(context, parametername, "AsnSetSettingsResult");

		let t: ENetUC_Settings_Manager.AsnSetSettingsResult | undefined;
		const s = TSConverter.prepareJSONData<ENetUC_Settings_Manager.AsnSetSettingsResult>(data, errors, newContext, optional);
		if (s !== undefined) {
			t = ENetUC_Settings_Manager.AsnSetSettingsResult.initEmpty();
			// [Print_JSON_DecoderSeqDefCode]
			t.optionalParams = ENetUC_Common_Converter.AsnOptionalParameters_Converter.fromJSON(s.optionalParams, errors, newContext, "optionalParams", true);
		}
		if (errors.validateResult(errorCount, newContext, "AsnSetSettingsResult"))
			return t;

		return undefined;
	}

	public static toBER(s: ENetUC_Settings_Manager.AsnSetSettingsResult | undefined, errors?: ConverterErrors, context?: EncodeContext, name?: string, optional?: boolean | number): asn1ts.Sequence | undefined {
		name ||= "AsnSetSettingsResult";
		if (!s) {
			TSConverter.addMissingError(errors, context, name, optional);
			return undefined;
		}

		const result = new asn1ts.Sequence(TSConverter.getASN1TSConstructorParams(name, optional));
		const t = result.valueBlock.value;
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addContext(context, name, "AsnSetSettingsResult");

		// [Print_BER_EncoderSeqDefCode]
		const _optionalParams = ENetUC_Common_Converter.AsnOptionalParameters_Converter.toBER(s.optionalParams, errors, newContext, "optionalParams", true);
		if (errors.validateResult(errorCount, newContext, "AsnSetSettingsResult")) {
			if (_optionalParams)
				t.push(_optionalParams);
			return result;
		}
		return undefined;
	}

	public static fromBER(data: Uint8Array | asn1ts.BaseBlock | undefined, errors?: ConverterErrors, context?: DecodeContext, parametername?: string, optional?: boolean): ENetUC_Settings_Manager.AsnSetSettingsResult | undefined {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addContext(context, parametername, "AsnSetSettingsResult");

		let t: ENetUC_Settings_Manager.AsnSetSettingsResult | undefined;
		const s = TSConverter.prepareASN1BERData(ENetUC_Settings_Manager.AsnSetSettingsResult.getASN1Schema, data, errors, newContext, optional);
		if (asn1ts.Sequence.typeGuard(s)) {
			t = ENetUC_Settings_Manager.AsnSetSettingsResult.initEmpty();
			// [Print_BER_DecoderSeqDefCode]
			t.optionalParams = ENetUC_Common_Converter.AsnOptionalParameters_Converter.fromBER(s.getTypedValueByName(asn1ts.Sequence, "optionalParams"), errors, newContext, "optionalParams", true);
		}

		if (errors.validateResult(errorCount, newContext, "AsnSetSettingsResult"))
			return t;

		return undefined;
	}
}

// [PrintTSEncoderDecoderCode]
export class AsnGetSettingsResult_Converter {
	public static toJSON(s: ENetUC_Settings_Manager.AsnGetSettingsResult, t: ENetUC_Settings_Manager.AsnGetSettingsResult & INamedType, errors?: ConverterErrors, context?: EncodeContext, parametername?: string): boolean {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addContext(context, parametername, "AsnGetSettingsResult");

		// [Print_JSON_EncoderSeqDefCode]
		if (newContext.bAddTypes)
			t._type = "AsnGetSettingsResult";
		const _settings = ENetUC_Settings_Manager.AsnSomeSettings.initEmpty();
		if (AsnSomeSettings_Converter.toJSON(s.settings, _settings, errors, newContext, "settings"))
			t.settings = _settings;
		if (s.optionalParams) {
			const _optionalParams = new ENetUC_Common.AsnOptionalParameters();
			if (ENetUC_Common_Converter.AsnOptionalParameters_Converter.toJSON(s.optionalParams, _optionalParams, errors, newContext, "optionalParams"))
				t.optionalParams = _optionalParams;
		}

		return errors.validateResult(errorCount, newContext, "AsnGetSettingsResult");
	}

	public static fromJSON(data: string | object | undefined, errors?: ConverterErrors, context?: DecodeContext, parametername?: string, optional?: boolean): ENetUC_Settings_Manager.AsnGetSettingsResult | undefined {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addContext(context, parametername, "AsnGetSettingsResult");

		let t: ENetUC_Settings_Manager.AsnGetSettingsResult | undefined;
		const s = TSConverter.prepareJSONData<ENetUC_Settings_Manager.AsnGetSettingsResult>(data, errors, newContext, optional);
		if (s !== undefined) {
			t = ENetUC_Settings_Manager.AsnGetSettingsResult.initEmpty();
			// [Print_JSON_DecoderSeqDefCode]
			const _settings = AsnSomeSettings_Converter.fromJSON(s.settings, errors, newContext, "settings", false);
			if (_settings)
				t.settings = _settings;
			t.optionalParams = ENetUC_Common_Converter.AsnOptionalParameters_Converter.fromJSON(s.optionalParams, errors, newContext, "optionalParams", true);
		}
		if (errors.validateResult(errorCount, newContext, "AsnGetSettingsResult"))
			return t;

		return undefined;
	}

	public static toBER(s: ENetUC_Settings_Manager.AsnGetSettingsResult | undefined, errors?: ConverterErrors, context?: EncodeContext, name?: string, optional?: boolean | number): asn1ts.Sequence | undefined {
		name ||= "AsnGetSettingsResult";
		if (!s) {
			TSConverter.addMissingError(errors, context, name, optional);
			return undefined;
		}

		const result = new asn1ts.Sequence(TSConverter.getASN1TSConstructorParams(name, optional));
		const t = result.valueBlock.value;
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addContext(context, name, "AsnGetSettingsResult");

		// [Print_BER_EncoderSeqDefCode]
		const _settings = AsnSomeSettings_Converter.toBER(s.settings, errors, newContext, "settings");
		const _optionalParams = ENetUC_Common_Converter.AsnOptionalParameters_Converter.toBER(s.optionalParams, errors, newContext, "optionalParams", true);
		if (errors.validateResult(errorCount, newContext, "AsnGetSettingsResult")) {
			if (_settings)
				t.push(_settings);
			if (_optionalParams)
				t.push(_optionalParams);
			return result;
		}
		return undefined;
	}

	public static fromBER(data: Uint8Array | asn1ts.BaseBlock | undefined, errors?: ConverterErrors, context?: DecodeContext, parametername?: string, optional?: boolean): ENetUC_Settings_Manager.AsnGetSettingsResult | undefined {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addContext(context, parametername, "AsnGetSettingsResult");

		let t: ENetUC_Settings_Manager.AsnGetSettingsResult | undefined;
		const s = TSConverter.prepareASN1BERData(ENetUC_Settings_Manager.AsnGetSettingsResult.getASN1Schema, data, errors, newContext, optional);
		if (asn1ts.Sequence.typeGuard(s)) {
			t = ENetUC_Settings_Manager.AsnGetSettingsResult.initEmpty();
			// [Print_BER_DecoderSeqDefCode]
			const _settings = AsnSomeSettings_Converter.fromBER(s.getTypedValueByName(asn1ts.Sequence, "settings"), errors, newContext, "settings");
			if (_settings)
				t.settings = _settings;
			t.optionalParams = ENetUC_Common_Converter.AsnOptionalParameters_Converter.fromBER(s.getTypedValueByName(asn1ts.Sequence, "optionalParams"), errors, newContext, "optionalParams", true);
		}

		if (errors.validateResult(errorCount, newContext, "AsnGetSettingsResult"))
			return t;

		return undefined;
	}
}

// [PrintTSEncoderDecoderCode]
export class AsnSetSettingsArgument_Converter {
	public static toJSON(s: ENetUC_Settings_Manager.AsnSetSettingsArgument, t: ENetUC_Settings_Manager.AsnSetSettingsArgument & INamedType, errors?: ConverterErrors, context?: EncodeContext, parametername?: string): boolean {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addContext(context, parametername, "AsnSetSettingsArgument");

		// [Print_JSON_EncoderSeqDefCode]
		if (newContext.bAddTypes)
			t._type = "AsnSetSettingsArgument";
		const _settings = ENetUC_Settings_Manager.AsnSomeSettings.initEmpty();
		if (AsnSomeSettings_Converter.toJSON(s.settings, _settings, errors, newContext, "settings"))
			t.settings = _settings;
		if (s.optionalParams) {
			const _optionalParams = new ENetUC_Common.AsnOptionalParameters();
			if (ENetUC_Common_Converter.AsnOptionalParameters_Converter.toJSON(s.optionalParams, _optionalParams, errors, newContext, "optionalParams"))
				t.optionalParams = _optionalParams;
		}

		return errors.validateResult(errorCount, newContext, "AsnSetSettingsArgument");
	}

	public static fromJSON(data: string | object | undefined, errors?: ConverterErrors, context?: DecodeContext, parametername?: string, optional?: boolean): ENetUC_Settings_Manager.AsnSetSettingsArgument | undefined {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addContext(context, parametername, "AsnSetSettingsArgument");

		let t: ENetUC_Settings_Manager.AsnSetSettingsArgument | undefined;
		const s = TSConverter.prepareJSONData<ENetUC_Settings_Manager.AsnSetSettingsArgument>(data, errors, newContext, optional);
		if (s !== undefined) {
			t = ENetUC_Settings_Manager.AsnSetSettingsArgument.initEmpty();
			// [Print_JSON_DecoderSeqDefCode]
			const _settings = AsnSomeSettings_Converter.fromJSON(s.settings, errors, newContext, "settings", false);
			if (_settings)
				t.settings = _settings;
			t.optionalParams = ENetUC_Common_Converter.AsnOptionalParameters_Converter.fromJSON(s.optionalParams, errors, newContext, "optionalParams", true);
		}
		if (errors.validateResult(errorCount, newContext, "AsnSetSettingsArgument"))
			return t;

		return undefined;
	}

	public static toBER(s: ENetUC_Settings_Manager.AsnSetSettingsArgument | undefined, errors?: ConverterErrors, context?: EncodeContext, name?: string, optional?: boolean | number): asn1ts.Sequence | undefined {
		name ||= "AsnSetSettingsArgument";
		if (!s) {
			TSConverter.addMissingError(errors, context, name, optional);
			return undefined;
		}

		const result = new asn1ts.Sequence(TSConverter.getASN1TSConstructorParams(name, optional));
		const t = result.valueBlock.value;
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addContext(context, name, "AsnSetSettingsArgument");

		// [Print_BER_EncoderSeqDefCode]
		const _settings = AsnSomeSettings_Converter.toBER(s.settings, errors, newContext, "settings");
		const _optionalParams = ENetUC_Common_Converter.AsnOptionalParameters_Converter.toBER(s.optionalParams, errors, newContext, "optionalParams", true);
		if (errors.validateResult(errorCount, newContext, "AsnSetSettingsArgument")) {
			if (_settings)
				t.push(_settings);
			if (_optionalParams)
				t.push(_optionalParams);
			return result;
		}
		return undefined;
	}

	public static fromBER(data: Uint8Array | asn1ts.BaseBlock | undefined, errors?: ConverterErrors, context?: DecodeContext, parametername?: string, optional?: boolean): ENetUC_Settings_Manager.AsnSetSettingsArgument | undefined {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addContext(context, parametername, "AsnSetSettingsArgument");

		let t: ENetUC_Settings_Manager.AsnSetSettingsArgument | undefined;
		const s = TSConverter.prepareASN1BERData(ENetUC_Settings_Manager.AsnSetSettingsArgument.getASN1Schema, data, errors, newContext, optional);
		if (asn1ts.Sequence.typeGuard(s)) {
			t = ENetUC_Settings_Manager.AsnSetSettingsArgument.initEmpty();
			// [Print_BER_DecoderSeqDefCode]
			const _settings = AsnSomeSettings_Converter.fromBER(s.getTypedValueByName(asn1ts.Sequence, "settings"), errors, newContext, "settings");
			if (_settings)
				t.settings = _settings;
			t.optionalParams = ENetUC_Common_Converter.AsnOptionalParameters_Converter.fromBER(s.getTypedValueByName(asn1ts.Sequence, "optionalParams"), errors, newContext, "optionalParams", true);
		}

		if (errors.validateResult(errorCount, newContext, "AsnSetSettingsArgument"))
			return t;

		return undefined;
	}
}

// [PrintTSEncoderDecoderCode]
export class AsnSettingsChangedArgument_Converter {
	public static toJSON(s: ENetUC_Settings_Manager.AsnSettingsChangedArgument, t: ENetUC_Settings_Manager.AsnSettingsChangedArgument & INamedType, errors?: ConverterErrors, context?: EncodeContext, parametername?: string): boolean {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addContext(context, parametername, "AsnSettingsChangedArgument");

		// [Print_JSON_EncoderSeqDefCode]
		if (newContext.bAddTypes)
			t._type = "AsnSettingsChangedArgument";
		const _settings = ENetUC_Settings_Manager.AsnSomeSettings.initEmpty();
		if (AsnSomeSettings_Converter.toJSON(s.settings, _settings, errors, newContext, "settings"))
			t.settings = _settings;
		if (s.optionalParams) {
			const _optionalParams = new ENetUC_Common.AsnOptionalParameters();
			if (ENetUC_Common_Converter.AsnOptionalParameters_Converter.toJSON(s.optionalParams, _optionalParams, errors, newContext, "optionalParams"))
				t.optionalParams = _optionalParams;
		}

		return errors.validateResult(errorCount, newContext, "AsnSettingsChangedArgument");
	}

	public static fromJSON(data: string | object | undefined, errors?: ConverterErrors, context?: DecodeContext, parametername?: string, optional?: boolean): ENetUC_Settings_Manager.AsnSettingsChangedArgument | undefined {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addContext(context, parametername, "AsnSettingsChangedArgument");

		let t: ENetUC_Settings_Manager.AsnSettingsChangedArgument | undefined;
		const s = TSConverter.prepareJSONData<ENetUC_Settings_Manager.AsnSettingsChangedArgument>(data, errors, newContext, optional);
		if (s !== undefined) {
			t = ENetUC_Settings_Manager.AsnSettingsChangedArgument.initEmpty();
			// [Print_JSON_DecoderSeqDefCode]
			const _settings = AsnSomeSettings_Converter.fromJSON(s.settings, errors, newContext, "settings", false);
			if (_settings)
				t.settings = _settings;
			t.optionalParams = ENetUC_Common_Converter.AsnOptionalParameters_Converter.fromJSON(s.optionalParams, errors, newContext, "optionalParams", true);
		}
		if (errors.validateResult(errorCount, newContext, "AsnSettingsChangedArgument"))
			return t;

		return undefined;
	}

	public static toBER(s: ENetUC_Settings_Manager.AsnSettingsChangedArgument | undefined, errors?: ConverterErrors, context?: EncodeContext, name?: string, optional?: boolean | number): asn1ts.Sequence | undefined {
		name ||= "AsnSettingsChangedArgument";
		if (!s) {
			TSConverter.addMissingError(errors, context, name, optional);
			return undefined;
		}

		const result = new asn1ts.Sequence(TSConverter.getASN1TSConstructorParams(name, optional));
		const t = result.valueBlock.value;
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addContext(context, name, "AsnSettingsChangedArgument");

		// [Print_BER_EncoderSeqDefCode]
		const _settings = AsnSomeSettings_Converter.toBER(s.settings, errors, newContext, "settings");
		const _optionalParams = ENetUC_Common_Converter.AsnOptionalParameters_Converter.toBER(s.optionalParams, errors, newContext, "optionalParams", true);
		if (errors.validateResult(errorCount, newContext, "AsnSettingsChangedArgument")) {
			if (_settings)
				t.push(_settings);
			if (_optionalParams)
				t.push(_optionalParams);
			return result;
		}
		return undefined;
	}

	public static fromBER(data: Uint8Array | asn1ts.BaseBlock | undefined, errors?: ConverterErrors, context?: DecodeContext, parametername?: string, optional?: boolean): ENetUC_Settings_Manager.AsnSettingsChangedArgument | undefined {
		errors ||= new ConverterErrors();
		const errorCount = errors.length;
		const newContext = TSConverter.addContext(context, parametername, "AsnSettingsChangedArgument");

		let t: ENetUC_Settings_Manager.AsnSettingsChangedArgument | undefined;
		const s = TSConverter.prepareASN1BERData(ENetUC_Settings_Manager.AsnSettingsChangedArgument.getASN1Schema, data, errors, newContext, optional);
		if (asn1ts.Sequence.typeGuard(s)) {
			t = ENetUC_Settings_Manager.AsnSettingsChangedArgument.initEmpty();
			// [Print_BER_DecoderSeqDefCode]
			const _settings = AsnSomeSettings_Converter.fromBER(s.getTypedValueByName(asn1ts.Sequence, "settings"), errors, newContext, "settings");
			if (_settings)
				t.settings = _settings;
			t.optionalParams = ENetUC_Common_Converter.AsnOptionalParameters_Converter.fromBER(s.getTypedValueByName(asn1ts.Sequence, "optionalParams"), errors, newContext, "optionalParams", true);
		}

		if (errors.validateResult(errorCount, newContext, "AsnSettingsChangedArgument"))
			return t;

		return undefined;
	}
}