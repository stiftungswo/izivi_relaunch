<?php
namespace IZiviPlanningBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class CodeFormType extends AbstractType
{

    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(
            array(
                'data_class' => 'IZiviPlanningBundle\Entity\Code',
                'allow_extra_fields' => true
            )
        );
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('type')->add('code');
    }
}