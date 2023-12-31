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
    /// Person.
    /// </summary>
    // *** Start programmer edit section *** (Person CustomAttributes)

    // *** End programmer edit section *** (Person CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("PersonE", new string[] {
            "Name as \'Name\'",
            "Position as \'Position\'",
            "Position.Name as \'Name\'"}, Hidden=new string[] {
            "Position.Name"})]
    [MasterViewDefineAttribute("PersonE", "Position", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Name")]
    public class Person : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        private IIS.HumanResources.PersonPosition fPosition;
        
        private IIS.HumanResources.Company fCompany;
        
        // *** Start programmer edit section *** (Person CustomMembers)

        // *** End programmer edit section *** (Person CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        // *** Start programmer edit section *** (Person.Name CustomAttributes)

        // *** End programmer edit section *** (Person.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                // *** Start programmer edit section *** (Person.Name Get start)

                // *** End programmer edit section *** (Person.Name Get start)
                string result = this.fName;
                // *** Start programmer edit section *** (Person.Name Get end)

                // *** End programmer edit section *** (Person.Name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Person.Name Set start)

                // *** End programmer edit section *** (Person.Name Set start)
                this.fName = value;
                // *** Start programmer edit section *** (Person.Name Set end)

                // *** End programmer edit section *** (Person.Name Set end)
            }
        }
        
        /// <summary>
        /// Person.
        /// </summary>
        // *** Start programmer edit section *** (Person.Position CustomAttributes)

        // *** End programmer edit section *** (Person.Position CustomAttributes)
        [PropertyStorage(new string[] {
                "Position"})]
        public virtual IIS.HumanResources.PersonPosition Position
        {
            get
            {
                // *** Start programmer edit section *** (Person.Position Get start)

                // *** End programmer edit section *** (Person.Position Get start)
                IIS.HumanResources.PersonPosition result = this.fPosition;
                // *** Start programmer edit section *** (Person.Position Get end)

                // *** End programmer edit section *** (Person.Position Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Person.Position Set start)

                // *** End programmer edit section *** (Person.Position Set start)
                this.fPosition = value;
                // *** Start programmer edit section *** (Person.Position Set end)

                // *** End programmer edit section *** (Person.Position Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.HumanResources.Company.
        /// </summary>
        // *** Start programmer edit section *** (Person.Company CustomAttributes)

        // *** End programmer edit section *** (Person.Company CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Company"})]
        public virtual IIS.HumanResources.Company Company
        {
            get
            {
                // *** Start programmer edit section *** (Person.Company Get start)

                // *** End programmer edit section *** (Person.Company Get start)
                IIS.HumanResources.Company result = this.fCompany;
                // *** Start programmer edit section *** (Person.Company Get end)

                // *** End programmer edit section *** (Person.Company Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Person.Company Set start)

                // *** End programmer edit section *** (Person.Company Set start)
                this.fCompany = value;
                // *** Start programmer edit section *** (Person.Company Set end)

                // *** End programmer edit section *** (Person.Company Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "PersonE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View PersonE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("PersonE", typeof(IIS.HumanResources.Person));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Person.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfPerson CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfPerson CustomAttributes)
    public class DetailArrayOfPerson : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.HumanResources.DetailArrayOfPerson members)

        // *** End programmer edit section *** (IIS.HumanResources.DetailArrayOfPerson members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Person by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Person.
        /// </summary>
        public DetailArrayOfPerson(IIS.HumanResources.Company fCompany) : 
                base(typeof(Person), ((ICSSoft.STORMNET.DataObject)(fCompany)))
        {
        }
        
        public IIS.HumanResources.Person this[int index]
        {
            get
            {
                return ((IIS.HumanResources.Person)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.HumanResources.Person dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
