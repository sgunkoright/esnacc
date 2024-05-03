// [PrintTSROSEInterfaceCode]
// [PrintTSROSEHeader]
/**
 * ENetUC_Event_ManagerROSE_Interface
 * "UC-Server-Access-Protocol-Event-Manager" ASN.1 interfaces.
 * This file was generated by estos esnacc (V6.0.2, 10.04.2024)
 * based on Coral WinSnacc written by Deepak Gupta
 * NOTE: This is a machine generated file - editing not recommended
 */

// prettier-ignore
/* eslint-disable */
// [PrintTSROSEImport]
import { IReceiveInvokeContext, AsnInvokeProblem } from "./TSROSEBase";
import { ISendInvokeContextParams } from "./TSInvokeContext";
// Local imports
import * as ENetUC_Event_Manager from "./ENetUC_Event_Manager";
// [PrintTSImports]
import * as ENetUC_Common from "./ENetUC_Common";
// [PrintTSRootTypes]
export const moduleName = "ENetUC_Event_ManagerROSEInterface";

// [PrintTSROSEInterface]
export interface IENetUC_Event_ManagerROSE {
	invoke_asnCreateFancyEvents(argument: ENetUC_Event_Manager.AsnCreateFancyEventsArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_Event_Manager.AsnCreateFancyEventsResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	event_asnFancyEvent(argument: ENetUC_Event_Manager.AsnFancyEventArgument, invokeContext?: ISendInvokeContextParams): void;
}

// [PrintTSROSEHandlerInterface]
// Contains all invokes of the interface (normally the server side)
export interface IENetUC_Event_ManagerROSE_Invoke_Handler {
	// Allows the implementer to (globally) implement an async local storage (thread local storage) for calls inside the called environment)
	setLogContext?(argument: unknown, invokeContext: IReceiveInvokeContext): void;
	onInvoke_asnCreateFancyEvents(argument: ENetUC_Event_Manager.AsnCreateFancyEventsArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Event_Manager.AsnCreateFancyEventsResult | ENetUC_Common.AsnRequestError | undefined>;
}

// Contains all events of the interface (normally the client side)
export interface IENetUC_Event_ManagerROSE_Event_Handler {
	// Allows the implementer to (globally) implement an async local storage (thread local storage) for calls inside the called environment)
	setLogContext?(argument: unknown, invokeContext: IReceiveInvokeContext): void;
	onEvent_asnFancyEvent(argument: ENetUC_Event_Manager.AsnFancyEventArgument, invokeContext: IReceiveInvokeContext): void;
}

// Contains all invokes and events of the interface
export type IENetUC_Event_ManagerROSE_Handler = IENetUC_Event_ManagerROSE_Invoke_Handler & IENetUC_Event_ManagerROSE_Event_Handler;

// [PrintTSROSEServerCopyPasteInterface]
/* Copy paste code for the import statement
import { IReceiveInvokeContext } from "./TSROSEBase";
import * as ENetUC_Common from "./ENetUC_Common";
import { ENetUC_Event_Manager } from "./ENetUC_Event_Manager";
*/

/**
 * Allows to set the log context for an invoke.
 * This method is called in advanced of methods handled inside this handler
 * The idea is to implement a async local storage based on the provided data from the argument or invokeContext
 *
 * @param argument - the snacc rose argument
 * @param invokeContext - the invoke context
 */
/*
public setLogContext(argument: unknown, invokeContext: IReceiveInvokeContext): void {
}
*/

/**
 * Method that will create some events the server will then dispatch to the clients
 *
 * It´s not possible to call this method through rest as the client won´t receive these events
 *
 * @param argument - Argument to create fancy events on the server side
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnCreateFancyEventsResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnCreateFancyEvents(argument: ENetUC_Event_Manager.AsnCreateFancyEventsArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Event_Manager.AsnCreateFancyEventsResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * An event that is dispatched from the server to the clients
 *
 * @param argument - Argument for the AsnFancyEventArgument method
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 */
/*
public onEvent_asnFancyEvent(argument: ENetUC_Event_Manager.AsnFancyEventArgument, invokeContext: IReceiveInvokeContext): void {
}
*/
