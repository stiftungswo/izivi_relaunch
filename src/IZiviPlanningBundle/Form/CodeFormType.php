<?php
namespace IZiviPlanningBundle\Type;

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
                'csrf_protection' => true,
                'allow_extra_fields' => false,
            )
        );
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('type');
    }

    public function getName()
    {
        return 'iziviplanningbundle_codeformtype';
    }

}