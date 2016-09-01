<?php
namespace IZiviPlanningBundle\Form;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class EmploymentFormType extends AbstractType
{

    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(
            array(
                'data_class' => 'IZiviPlanningBundle\Entity\Employment',
                'allow_extra_fields' => false
            )
        );
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('user', EntityType::class, array('class' => 'IZiviPlanningBundle:User'))
            ->add('tender', EntityType::class, array('class' => 'IZiviPlanningBundle:Tender'))
            ->add('start', DateTimeType::class, array('required' => false, 'widget' => 'single_text'))
            ->add('end', DateTimeType::class, array('required' => false, 'widget' => 'single_text'))
            ->add('draftDate', DateTimeType::class, array('required' => false, 'widget' => 'single_text'))
            ->add('employmentType')
        ;
    }

}