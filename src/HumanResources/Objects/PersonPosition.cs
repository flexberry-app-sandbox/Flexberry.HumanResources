﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.HumanResources
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Person position.
    /// </summary>
    // *** Start programmer edit section *** (PersonPosition CustomAttributes)

    // *** End programmer edit section *** (PersonPosition CustomAttributes)
    [AutoAltered()]
    [Caption("Person position")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("PersonPositionE", new string[] {
            "Name as \'Name\'"})]
    [View("PersonPositionL", new string[] {
            "Name as \'Name\'"})]
    public class PersonPosition : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        // *** Start programmer edit section *** (PersonPosition CustomMembers)

        // *** End programmer edit section *** (PersonPosition CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        // *** Start programmer edit section *** (PersonPosition.Name CustomAttributes)

        // *** End programmer edit section *** (PersonPosition.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                // *** Start programmer edit section *** (PersonPosition.Name Get start)

                // *** End programmer edit section *** (PersonPosition.Name Get start)
                string result = this.fName;
                // *** Start programmer edit section *** (PersonPosition.Name Get end)

                // *** End programmer edit section *** (PersonPosition.Name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (PersonPosition.Name Set start)

                // *** End programmer edit section *** (PersonPosition.Name Set start)
                this.fName = value;
                // *** Start programmer edit section *** (PersonPosition.Name Set end)

                // *** End programmer edit section *** (PersonPosition.Name Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "PersonPositionE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View PersonPositionE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("PersonPositionE", typeof(IIS.HumanResources.PersonPosition));
                }
            }
            
            /// <summary>
            /// "PersonPositionL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View PersonPositionL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("PersonPositionL", typeof(IIS.HumanResources.PersonPosition));
                }
            }
        }
    }
}
