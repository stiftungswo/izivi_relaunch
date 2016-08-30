<?php
namespace IZiviPlanningBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class UserFormType extends AbstractType
{

    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(
            array(
                'data_class' => 'IZiviPlanningBundle\Entity\User',
                'allow_extra_fields' => false
            )
        );
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('username')
            ->add('email')
            ->add('plainPassword')
            ->add('firstname')
            ->add('lastname')
            ->add('street')
            ->add('postCode')
            ->add('city')
            ->add('birthday', DateTimeType::class, array('required' => false, 'widget' => 'single_text'))
            ->add('phone')
            ->add('hometown')
            ->add('hometownState')
            ->add('bankType')
            ->add('accountNumber')
            ->add('bankName')
            ->add('clearingNumber')
            ->add('iban')
            ->add('insuranceName')
            ->add('insuranceNumber')
            ->add('experience')
            ->add('driversLicence')
            ->add('trainTicket')
            ->add('registrationCenter')
        ;
    }

}